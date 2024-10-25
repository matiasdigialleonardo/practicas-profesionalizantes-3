class KeyboardController
{
	constructor( view, model ) 
	{
		this.model = model;
		this.view = view;

		this.keyCode = false;
		this.key = false;
	}

	init()
	{
		window.onkeydown = (event) => {this.key = true; this.keyCode = event.keyCode; this.onkeydown(event); };
        window.onkeyup = (event) => this.key = false;
	}

	disconnect()
	{
		window.onkeydown = null;
        window.onkeyup = null;
	}

	onkeydown(event)
	{
		console.log('keypress:' + this.keyCode);
		if (this.key && this.keyCode == 37) {this.model.player.moveLeft(); };
	    if (this.key && this.keyCode == 39) {this.model.player.moveRight(); };
	    if (this.key && this.keyCode == 38) {this.model.player.moveUp(); };
	    if (this.key && this.keyCode == 40) {this.model.player.moveDown(); };
	}
}

export { KeyboardController };