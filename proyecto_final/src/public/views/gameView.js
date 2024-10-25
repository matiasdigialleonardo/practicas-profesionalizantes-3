import { LoginView } from './loginView.js'
import { LobbyView } from './lobbyView.js'
import { CombatView } from './combatView.js'
import { playerView } from './playerView.js'

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

class GameView extends HTMLElement {
    constructor() {
        super();

        this.loginView = new LoginView();
        this.lobbyView = new LobbyView();
        this.combatView = new CombatView();

        this.playerView = new playerView();
        this.renderObjects = [this.playerView];

        let canvas = document.createElement("canvas");
        this.context = canvas.getContext("2d");

        canvas.style = "border:1px solid black";
        canvas.width = 800;
        canvas.height = 600;



        this.combatView.append(canvas);

        // To do Definir tamanio del canvas.
        this.append(this.loginView);

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
        }
    }

    renderView(viewName) {
        removeAllChildNodes(this);

        switch (viewName) {
            case 'login':
                this.appendChild(this.loginView);
            case 'lobby':
                this.appendChild(this.lobbyView);
            case 'combat':
                this.appendChild(this.combatView);
        }
    }

    render( drawingContext, object )
    {
        //Limpiando todo
        drawingContext.clearRect(0, 0, drawingContext.canvas.width, drawingContext.canvas.height);
    
        object.tickCount += 1;
            
        if (object.tickCount > object.ticksPerFrame) {
            object.tickCount = 0;
    
            if (object.frameIndex < object.frames - 1) {
                object.frameIndex += 1;
            } else {
                object.frameIndex = 0;
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
                object.width, // Ancho del cuadro
                object.height // Alto del cuadro
            );
    
        requestAnimationFrame(() => this.render(drawingContext, object));  
    }

    update()
    {
        for (let object of this.renderObjects)
        {
            this.render(this.context, object);
        }
    }
    

}

customElements.define('wc-gv', GameView);

export { GameView };