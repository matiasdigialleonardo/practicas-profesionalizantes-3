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
		this.model.addEventListener('moveup', this.onmoveup.bind(this) );
		this.model.addEventListener('moveright', this.onmoveright.bind(this) );
		this.model.addEventListener('moveleft', this.onmoveleft.bind(this) );
		this.model.addEventListener('movedown', this.onmovedown.bind(this) );

    }

	onmoveup(event)
	{
		this.view.state = this.model.state;
	}

	onmoveright(event)
	{
		this.view.state = this.model.state;
	}

	onmoveleft(event)
	{
		this.view.state = this.model.state;
	}

	onmovedown(event)
	{
		this.view.state = this.model.state;
	}
   
    runStep()
    {
        this.view.update( this.model.getCurrentState() );
    }
   

}

export { PlayerController };