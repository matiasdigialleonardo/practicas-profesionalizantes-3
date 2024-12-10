class KeyboardController
{
	constructor( view, model ) 
	{
		this.model = model;
		this.view = view;

		this.keyCode = false;
		this.key = false;

		this.keyState = {
            ArrowLeft: false,
            ArrowRight: false,
            ArrowUp: false,
            ArrowDown: false
        };

	}

	init()
	{
		// window.onkeydown = (event) => {this.key = true; this.keyCode = event.keyCode; this.onkeydown(event); };
        // window.onkeyup = (event) => this.key = false;

        window.addEventListener('keydown', (event) => this.onKeyDown(event));
        window.addEventListener('keyup', (event) => this.onKeyUp(event));
	}

	disconnect()
	{
		window.onkeydown = null;
        window.onkeyup = null;
	}

    onKeyDown(event) {

		console.log(event.key)
        if (this.keyState.hasOwnProperty(event.key)) {
            this.keyState[event.key] = true;
        }
    }

    onKeyUp(event) {
        if (this.keyState.hasOwnProperty(event.key)) {
            this.keyState[event.key] = false;
        }
    }

    processKeys() {
        if (this.keyState['ArrowLeft']) {
            this.model.player.moveLeft();
        }
        if (this.keyState['ArrowRight']) {
            this.model.player.moveRight();
        }
        if (this.keyState['ArrowUp']) {
            this.model.player.moveUp();
        }
        if (this.keyState['ArrowDown']) {
            this.model.player.moveDown();
        }
    }

	// onkeydown(event)
	// {
	// 	console.log('keypress:' + this.keyCode);
	// 	if (this.key && this.keyCode == 37) {
	// 		this.model.player.moveLeft();
	// 		this.model.player.hasMoved();
	// 	}
	// 	if (this.key && this.keyCode == 39) {
	// 		this.model.player.moveRight();
	// 		this.model.player.hasMoved();
	// 	}
	// 	if (this.key && this.keyCode == 38) {
	// 		this.model.player.moveUp();
	// 		this.model.player.hasMoved();
	// 	}
	// 	if (this.key && this.keyCode == 40) {
	// 		this.model.player.moveDown();
	// 		this.model.player.hasMoved();
	// 	}
	// }
}

export { KeyboardController };