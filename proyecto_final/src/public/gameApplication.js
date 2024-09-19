import { GameView } from './views/gameView.js';
import { GameModel } from './models/gameModel.js';
import { GameController } from './controllers/gameController.js';

class GameApplication extends HTMLElement
{
    constructor()
    {
        super();

        this.gameView = new GameView();
        this.gameModel = new GameModel();
        this.gameController = new GameController(this.gameView, this.gameModel);

        this.appendChild(this.gameView);

        this.gameController.start();
    }
}

customElements.define('wc-ga', GameApplication);

export { GameApplication };