import { LoginController } from './loginController.js'
import { LobbyController } from './lobbyController.js'
import { CombatController } from './combatController.js'

class GameController {
    constructor(view, model) {

        this.innerView = view;
        this.innerModel = model;
        this.loginController = new LoginController(view.getViewMyName("login"), model)
        this.lobbyController = new LobbyController(view.getViewMyName("lobby"), model)
        this.combatController = new CombatController(view.getViewMyName("combat"), model)
    }

    start() {
        this.loginController.connect();
        this.lobbyController.connect();

        this.innerModel.addEventListener("userLogged", () => {
            this.innerView.renderView("lobby");
        })

        console.log("Im starting...")
    }




    is_user_authenticated() {
        return this.innerModel.is_user_authenticated();
    }

    disconnect() {
        //To-do...
    }
}

export { GameController };