import { LoginController } from './loginController.js'
import { LobbyController } from './lobbyController.js'
import { CombatController } from './combatController.js'
import { PlayerController } from './playerController.js'

/*
    El controlador responde a los eventos que producen la vista (interaccion grafica) y en el modelo.
*/

class GameController {
    constructor(view, model) {

        this.innerView = view;
        this.innerModel = model;
        this.loginController = new LoginController(view.getViewMyName("login"), model);
        this.lobbyController = new LobbyController(view.getViewMyName("lobby"), model);
        this.combatController = new CombatController(view.getViewMyName("combat"), model);
        this.playerController = new PlayerController(view.getViewMyName("player"), model);

        this.loginController.init();
        this.lobbyController.connect();

        this.innerModel.addEventListener("userLogged", () => {
            this.innerView.renderView("lobby");
        })

        this.innerModel.addEventListener("Player ready", () => {
            this.innerView.renderView("combat");
        })

        document.body.appendChild(this.innerView);

        // Consultar al modelo el estado inicial del jugador
        // this.playerController.askForPlayerState();

    }

    start() {

        requestAnimationFrame(() => this.innerView.update());  

        console.log("Im starting...")
    }

    /* stop() */
}

export { GameController };