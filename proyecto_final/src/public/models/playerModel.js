class PlayerModel
{
	constructor()
    {
        this.innerState = 'idle';
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

    moveLeft()
    {
        this.state.position_x -= this.delta_x;
        this.dispatchEvent( new CustomEvent('moveleft') );
    }

    moveRight()
    {
        this.state.position_x += this.delta_x;
        this.dispatchEvent( new CustomEvent('moveright') );
    }

}

export { PlayerModel };