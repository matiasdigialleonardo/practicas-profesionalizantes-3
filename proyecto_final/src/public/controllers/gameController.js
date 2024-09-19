import { LoginController } from './loginController.js'

class GameController {
    constructor(view, model) {

        this.innerView = view;
        this.innerModel = model;
        this.loginController = new LoginController(view.getViewMyName("login"), model)
    }

    start() {
        this.loginController.connect();

        this.innerModel.addEventListener("userLogged", () => {
            this.innerView.renderView("login");
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