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
}

export { PlayerModel };