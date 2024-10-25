class PlayerController
{
	constructor(model, view)
    {
        this.model = model;
        this.view = view;
    }

    init()
    {
        this.view.update( this.model.player.getCurrentState() );

    }
   
    runStep()
    {
        this.view.update( this.model.getCurrentState() );
    }
   

}

export { PlayerController };