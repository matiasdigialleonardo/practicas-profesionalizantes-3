class PlayerController
{
	constructor(view, model)
    {
		this.view = view;
        this.model = model;
    }

    init()
    {
        this.view.update( this.model.player.getCurrentState() );
		// this.model.addEventListener('moveup', this.onmoveup.bind(this) );
		// this.model.addEventListener('moveright', this.onmoveright.bind(this) );
		// this.model.addEventListener('moveleft', this.view.x++ );
		// this.model.addEventListener('movedown', this.onmovedown.bind(this) );

    }

	moveRight()
	{
		//this.view.update( this.model.player.getCurrentState() );
		this.view.x += this.view.delta_x;
	}

	moveLeft()
	{
		this.view.x -= this.view.delta_x;
	}

	moveUp()
	{
		this.view.y -= this.view.delta_y;
	}
   
    moveDown()
    {
		this.view.y += this.view.delta_y;
    }
   

}

export { PlayerController };