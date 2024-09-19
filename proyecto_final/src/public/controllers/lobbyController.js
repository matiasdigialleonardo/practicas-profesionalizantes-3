class LobbyController
{
    constructor(view, model)
    {
        this.innerView = view;
        this.innerModel = model;
    }

	connect()
	{

	}

	is_user_authenticated()
	{
		return this.innerModel.is_user_authenticated();
	}

	disconnect()
	{
		//To-do...
	}
}

export { LobbyController };