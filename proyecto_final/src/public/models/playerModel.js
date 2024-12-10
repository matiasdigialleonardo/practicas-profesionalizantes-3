class PlayerModel extends EventTarget
{
	constructor()
    {
        super();
        this.innerState = 'idle';
        this.isMoving = false;
    }

    getCurrentState()
    {
        return this.innerState;
    }

    walk()
    {
        this.innerState = 'walking';
    }

    run()
    {
        this.innerState = 'running';
    }

    idle()
    {
        this.innerState = 'idle';
    }

    hasMoved()
    {

        this.dispatchEvent( new CustomEvent('hasMoved'));
    }

    moveLeft()
    {
        this.dispatchEvent( new CustomEvent('moveleft') );
    }

    moveRight()
    {
        this.dispatchEvent( new CustomEvent('moveright') );
    }

    moveUp()
    {
        this.dispatchEvent( new CustomEvent('moveup') );
    }

    moveDown()
    {
        this.dispatchEvent( new CustomEvent('movedown') );
    }

}

export { PlayerModel };