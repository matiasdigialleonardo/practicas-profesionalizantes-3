import { LoginView } from './loginView.js'
import { LobbyView } from './lobbyView.js'
import { LabyrinthView } from './labyrinthView.js'
import { playerView } from './playerView.js'
import { GameWonView } from './gameWonView.js'
import { PortalView } from './portalView.js'
import { InstituteView } from './instituteView.js'

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

class GameView extends HTMLElement {
    constructor() {
        super();

        // En algun lugar de la vista se va a manejar que esta haciendo el sonic.

        this.loginView = new LoginView();
        this.lobbyView = new LobbyView();
        this.lobbyView.addEventListener("combatStarted", () => {
            renderView("labyrinth");
        })
        this.gameWonView = new GameWonView();

        this.playerView = new playerView();
        this.portalView = new PortalView();
        this.instituteView = new InstituteView();

        this.renderObjects = [this.portalView, this.instituteView, this.playerView];

        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");
        this.canvas.width = 1800;
        this.canvas.height = 800;

        this.canvas.style.position = "absolute";
        this.canvas.style.top = "50%";
        this.canvas.style.left = "50%";
        this.canvas.style.transform = "translate(-50%, -50%)";
        this.canvas.style.background = "linear-gradient(to bottom, #90EE90, #66C266)";

        this.labyrinths = {
            labyrinth1: [
                // Outer walls
                { x: 0, y: 0, width: this.canvas.width, height: 20 },
                { x: 0, y: this.canvas.height - 20, width: this.canvas.width, height: 20 },
                { x: 0, y: 0, width: 20, height: this.canvas.height },
                { x: this.canvas.width - 20, y: 0, width: 20, height: this.canvas.height },
        
                // Horizontal Walls
                { x: 0, y: 150, width: this.canvas.width - 200, height: 20 },
                { x: 210, y: 350, width: 200, height: 20 },
                { x: 0, y: 450, width: 200, height: 20 },
                { x: 650, y: 350, width: 1200, height: 20 },
                { x: 200, y: 550, width: 600, height: 20 },
                { x: 1000, y: 550, width: 600, height: 20 },
        
                // Vertical Walls
                { x: 200, y: 350, width: 20, height: 200 },
                { x: 1000, y: 350, width: 20, height: 200 },
            ],
            labyrinth2: [
                // Outer walls
                { x: 0, y: 0, width: this.canvas.width, height: 20 },
                { x: 0, y: this.canvas.height - 20, width: this.canvas.width, height: 20 },
                { x: 0, y: 0, width: 20, height: this.canvas.height },
                { x: this.canvas.width - 20, y: 0, width: 20, height: this.canvas.height },
        
                // Horizontal Walls
                { x: 340, y: 150, width: 1300, height: 20 },
                { x: 340, y: 200, width: 1300, height: 20 },
                { x: 500, y: 350, width: 400, height: 20 },
                { x: 1200, y: 350, width: 280, height: 20 },
                { x: 900, y: 480, width: 577, height: 20 },
                { x: 340, y: 550, width: 210, height: 20 },
                { x: 1050, y: 630, width: 580, height: 20 },
        
                // Vertical Walls
                { x: 160, y: 0, width: 20, height: 650 },
                { x: 340, y: 150, width: 20, height: 420 },
                { x: 380, y: 550, width: 20, height: 650 },
                { x: 700, y: 350, width: 20, height: 300 },
                { x: 500, y: 550, width: 20, height: 650 },
                { x: 900, y: 350, width: 20, height: 150 },
                { x: 1050, y: 150, width: 20, height: 200 },
                { x: 900, y: 500, width: 20, height: 650 },
                { x: 1200, y: 370, width: 20, height: 130 },
                { x: 1470, y: 350, width: 20, height: 150 },
                { x: 1620, y: 150, width: 20, height: 500 },
            ]
        };

        this.currentLabyrinth = 'labyrinth1';

        this.renderView("login");

        this.update();

    }

    getViewMyName(viewName) {
        switch (viewName) {
            case 'login':
                return this.loginView;
            case 'lobby':
                return this.lobbyView;
            case 'labyrinth':
                return this.labyrinthView;
            case 'player':
                return this.playerView;
            case 'gameWon':
                return this.gameWonView;
        }
    }

    renderView(viewName) {
        removeAllChildNodes(this);
            
        switch (viewName) {
            case 'login':
                this.appendChild(this.loginView);
                break;
            case 'lobby':
                this.appendChild(this.lobbyView);
                break;
            case 'labyrinth':
                let labyrinthView = new LabyrinthView();
                this.appendChild(labyrinthView);
                labyrinthView.append(this.canvas);
                break;
            case 'gameWon':
                this.appendChild(this.gameWonView);
                break;
        }
    }

    getCurrentLabyrinth()
    {
        return this.labyrinths[this.currentLabyrinth];
    }

    drawLabyrinth(drawingContext, labyrinth) {

        const grassImage = new Image();
        grassImage.src = '../images/grass_texture.png';

        const grassPattern = drawingContext.createPattern(grassImage, 'repeat');
        labyrinth.forEach(rect => {
            drawingContext.fillStyle = grassPattern;
            drawingContext.fillRect(rect.x, rect.y, rect.width, rect.height);
        });
    }

    switchLabyrinth(labyrinthName)
    {
        this.playerView.x = 40;
        this.playerView.y = 20;

        if (this.labyrinths[labyrinthName]) 
        {
            this.currentLabyrinth = labyrinthName;
            this.portalView.x = 7000;
            this.portalView.y = 5000;

            this.instituteView.x = this.instituteView.labyrinth2XCoords;
            this.instituteView.y = this.instituteView.labyrinth2YCoords;
        }
    }

    checkCollision(x, y, labyrinth) {
        for (let i = 0; i < labyrinth.length; i++) {
            const wall = labyrinth[i];
            if (
                x < wall.x + wall.width &&
                x + this.playerView.width > wall.x &&
                y < wall.y + wall.height &&
                y + this.playerView.height > wall.y
            ) {
                return true; // Collision
            }
        }
        return false; // No collision
    }

    checkPlayerEnteredPortal(player, portal) {

        // Calculate the center position of the player image.
        const playerCenterX = player.x + player.width / 2;
        const playerCenterY = player.y + player.height / 2;

        console.log( "player center x :" + playerCenterX);

        // Calculate the center position of the portal image taking into account its scaleX and scaleY otherwise
        // the trigger will go before the player visually enters the portal
        const portalScaledWidth = portal.width * portal.scaleX;
        const portalScaledHeight = portal.height * portal.scaleY;
        const portalCenterX = portal.x + portalScaledWidth / 2;
        const portalCenterY = portal.y + portalScaledHeight / 2;

        console.log("Portal x" + portalCenterX);

        const threshold = 30;

        // The threshold allows for the check to be off the center of the objects in case they dont exactly match
        if (
            Math.abs(playerCenterX - portalCenterX) <= threshold &&
            Math.abs(playerCenterY - portalCenterY) <= threshold
        ) {
            return true;
        }

        return false;

    }

    // Render should be a private method, it should not be called by the controller.
    render( drawingContext, object )
    {    
        if (object.hasOwnProperty('tickCount'))
        {
            object.tickCount += 1;
            
            if (object.tickCount > object.ticksPerFrame) {
                object.tickCount = 0;
        
                if (object.frameIndex < object.frames - 1) {
                    object.frameIndex += 1;
                } else {
                    object.frameIndex = 0;
                }
            }
        }

        drawingContext.drawImage(
                object.image,
                object.frameIndex * object.width, // Coordenada del eje x de la esquina superior izquierda
                object.row * object.height, // Coordenada del eje y de la esquina superior izquierda
                object.width, // Ancho del rectángulo
                object.height, // Altura del rectángulo
                object.x, // Posición x
                object.y,// Posición y
                object.width * object.scaleX, // Ancho del cuadro
                object.height * object.scaleY // Alto del cuadro
            );
    }

    update()
    {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

        for (let object of this.renderObjects)
        {
            this.render(this.context, object);
            this.drawLabyrinth(this.context, this.getCurrentLabyrinth());
            
        }
        // requestAnimationFrame(() => this.update());  
    }
}

customElements.define('wc-gv', GameView);

export { GameView };