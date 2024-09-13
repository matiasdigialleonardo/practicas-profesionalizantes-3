const GameView = require('./views/gameView');
const GameModel = require('./models/gameModel');
const GameController = require('./controllers/gameController');

class GameApplication
{
    constructor()
    {
        this.gameView = new GameView();
        this.gameModel = new GameModel();
        this.gameController = new GameController(this.gameView, this.gameModel);
    }
}