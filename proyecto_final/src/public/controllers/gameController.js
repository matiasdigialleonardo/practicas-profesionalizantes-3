class GameController
{
    constructor(view, model)
    {

        this.gameView = view;
        this.gameModel = model;
    }

    start()
    {
        console.log("Im starting...")
    }
}

export { GameController };