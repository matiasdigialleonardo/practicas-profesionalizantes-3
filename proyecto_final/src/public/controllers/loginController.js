class LoginController
{
    constructor(view, model)
    {
        this.innerView = view;
        this.innerModel = model;
    }

	init()
	{
        this.innerView.addEventListener('login', async (event) =>
        {
            const { username, password } = event.detail;

            this.innerModel.logUser(username, password);
            
        } );
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

export { LoginController };