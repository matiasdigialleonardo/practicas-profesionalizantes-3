class LoginController
{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
    }

	init()
	{
        this.view.addEventListener('login', async (event) =>
        {
            const { username, password } = event.detail;

            this.model.logUser(username, password);
            
        } );
	}

	is_user_authenticated()
	{
		return this.model.is_user_authenticated();
	}

	disconnect()
	{
		//To-do...
	}
}

export { LoginController };