import { LoginController } from './loginController.js'
import { LobbyController } from './lobbyController.js'
import { LabyrinthController } from './labyrinthController.js'
import { KeyboardController } from './keyboardController.js'

/*
    El controlador responde a los eventos que producen la vista (interaccion grafica) y en el modelo.
*/

class GameController {
    constructor(view, model) {

        this.view = view;
        this.model = model;
        this.loginController = new LoginController(view.getViewMyName("login"), model);
        this.lobbyController = new LobbyController(view.getViewMyName("lobby"), model);
        this.labyrinthController = new LabyrinthController(view.getViewMyName("labyrinth"), model);
        this.keyboardController = new KeyboardController(view.getViewMyName("player"), model);

        this.loginController.init();
        this.lobbyController.init();
        this.keyboardController.init();


        this.model.addEventListener("userLogged", () => {
            this.view.renderView("lobby");
        })

        this.model.addEventListener("Player ready", () => {
            this.view.renderView("labyrinth");
        })

        this.model.player.addEventListener("moveleft", () => {

            this.view.playerView.turnLeft();

            if (!this.view.checkCollision(this.view.playerView.x - this.view.playerView.delta_x, this.view.playerView.y, this.view.getCurrentLabyrinth())) {
                this.view.playerView.x -= this.view.playerView.delta_x;
            }

            if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.portalView)) {
                this.view.switchLabyrinth('labyrinth2');
            }

            if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.instituteView)) {
                this.view.renderView('gameWon');
            }
        });

        this.model.player.addEventListener("moveright", () => {

            this.view.playerView.turnRight();

            if (!this.view.checkCollision(this.view.playerView.x + this.view.playerView.delta_x, this.view.playerView.y, this.view.getCurrentLabyrinth())) {
                this.view.playerView.x += this.view.playerView.delta_x;
            }

            if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.portalView)) {
                this.view.switchLabyrinth('labyrinth2');
            }

            if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.instituteView)) {
                this.view.renderView('gameWon');
            }
        });

        this.model.player.addEventListener("moveup", () => {

            if (!this.view.checkCollision(this.view.playerView.x, this.view.playerView.y - this.view.playerView.delta_y, this.view.getCurrentLabyrinth())) {
                this.view.playerView.y -= this.view.playerView.delta_y;
            }

            if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.portalView)) {
                this.view.switchLabyrinth('labyrinth2');
            }

            if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.instituteView)) {
                this.view.renderView('gameWon');
            }
        });

        this.model.player.addEventListener("movedown", () => {

            if (!this.view.checkCollision(this.view.playerView.x, this.view.playerView.y + this.view.playerView.delta_y, this.view.getCurrentLabyrinth())) {
                this.view.playerView.y += this.view.playerView.delta_y;
            }

            if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.portalView)) {
                this.view.switchLabyrinth('labyrinth2');
            }

            if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.instituteView)) {
                this.view.renderView('gameWon');
            }
        });

        // this.model.player.addEventListener("hasMoved", () => {

        //     if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.portalView)) {
        //         this.view.switchLabyrinth('labyrinth2');
        //     }

        //     if (this.view.checkPlayerEnteredPortal(this.view.playerView, this.view.instituteView)) {
        //         this.view.renderView('gameWon');
        //     }
        // });

        // Consultar al modelo el estado inicial del jugador
        // this.playerController.askForPlayerState();
        

        document.body.appendChild(this.view);

    }

    updatePlayerState()
    {
        this.view.playerView.update(this.model.player.getCurrentState());
    }

    gameloop()
    {
        this.keyboardController.processKeys();
        this.updatePlayerState();
        this.view.update();
        requestAnimationFrame(() => this.gameloop());
    }

    start() {
        
        requestAnimationFrame(() => this.gameloop());  

    }

    /* stop() */
}

export { GameController };