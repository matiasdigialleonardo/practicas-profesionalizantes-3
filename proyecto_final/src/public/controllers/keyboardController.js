class KeyboardController
{
	constructor( model, view ) 
	{
		this.innerModel = model;
		this.innerView = view;

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
		if (this.key && this.keyCode == 37) {this.innerModel.moveLeft(); };
	    if (this.key && this.keyCode == 39) {this.innerModel.moveRight(); };
	    if (this.key && this.keyCode == 38) {this.innerModel.moveUp(); };
	    if (this.key && this.keyCode == 40) {this.innerModel.moveDown(); };
	}
}

export { KeyboardController };