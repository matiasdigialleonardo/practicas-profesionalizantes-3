import { GameView } from './views/gameView.js';
import { GameModel } from './models/gameModel.js';
import { GameController } from './controllers/gameController.js';

class GameApplication
{
    constructor()
    {
        this.gameView = new GameView();
        this.gameModel = new GameModel();
        this.gameController = new GameController(this.gameView, this.gameModel);
    }

    run()
    {
        this.gameController.start();
    }

}

export { GameApplication };