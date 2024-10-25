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
		this.innerModel.addEventListener('moveup', this.onmoveup.bind(this) );
		this.innerModel.addEventListener('moveright', this.onmoveright.bind(this) );
		this.innerModel.addEventListener('moveleft', this.onmoveleft.bind(this) );
		this.innerModel.addEventListener('movedown', this.onmovedown.bind(this) );

    }

	onmoveup(event)
	{
		this.innerView.state = this.innerModel.state;
	}

	onmoveright(event)
	{
		this.innerView.state = this.innerModel.state;
	}

	onmoveleft(event)
	{
		this.innerView.state = this.innerModel.state;
	}

	onmovedown(event)
	{
		this.innerView.state = this.innerModel.state;
	}
   
    runStep()
    {
        this.view.update( this.model.getCurrentState() );
    }
   

}

export { PlayerController };