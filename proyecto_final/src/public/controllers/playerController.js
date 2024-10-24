class playerController
{
	constructor(model, view)
    {
        this.model = model;
        this.view = view;
    }

    init()
    {
        this.view.update( this.model.getCurrentState() );      
    }
   
    runStep()
    {
        this.view.update( this.model.getCurrentState() );
    }
   

}

export { playerController };