import { LoginView } from './loginView.js'
import { LobbyView } from './lobbyView.js'
import { CombatView } from './combatView.js'
import { playerView } from './playerView.js'
import { PortalView } from './portalView.js'

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
            renderView("combat");
        })

        this.playerView = new playerView();
        this.portalView = new PortalView();

        this.renderObjects = [this.playerView, this.portalView];

        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d");

        this.canvas.style = "border:1px solid black";
        this.canvas.width = 1800;
        this.canvas.height = 800;
        
        this.renderView("combat");

        // Laberinto 1
        // this.rectangles = [
        //     // Outer walls
        //     { x: 0, y: 0, width: this.canvas.width, height: 20 },
        //     { x: 0, y: this.canvas.height - 20, width: this.canvas.width, height: 20 },
        //     { x: 0, y: 0, width: 20, height: this.canvas.height },
        //     { x: this.canvas.width - 20, y: 0, width: 20, height: this.canvas.height },

        //     // Horizontal Walls
        //     { x: 0, y: 150, width: this.canvas.width - 200, height: 20 },
        //     { x: 210, y: 350, width: 200, height: 20 },
        //     { x: 0, y: 450, width: 200, height: 20 },
        //     { x: 650, y: 350, width: 1200, height: 20 },
        //     { x: 200, y: 550, width: 600, height: 20 },
        //     { x: 1000, y: 550, width: 600, height: 20 },
            
        //     // Vertical Walls
        //     { x: 200, y: 350, width: 20, height: 200 },
        //     { x: 1000, y: 350, width: 20, height: 200 },

        // ];

        // Laberinto 2
        this.rectangles = [
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

        ];

        this.update();

    }

    getViewMyName(viewName) {
        switch (viewName) {
            case 'login':
                return this.loginView;
            case 'lobby':
                return this.lobbyView;
            case 'combat':
                return this.combatView;
            case 'player':
                return this.playerView;
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
            case 'combat':
                let combatView = new CombatView();
                this.appendChild(combatView);
                combatView.append(this.canvas);
                break;
        }
    }

    drawRectangles(drawingContext)
    {
        this.rectangles.forEach(rect => {
            drawingContext.fillStyle = 'black';
            drawingContext.fillRect(rect.x, rect.y, rect.width, rect.height);
        });
    }

    checkCollision(x, y) {
        for (let i = 0; i < this.rectangles.length; i++) {
            const wall = this.rectangles[i];
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
            this.drawRectangles(this.context);
            
        }
        requestAnimationFrame(() => this.update());  
    }
}

customElements.define('wc-gv', GameView);

export { GameView };