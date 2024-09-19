class GameController
{
    constructor(view, model)
    {

        this.innerView = view;
        this.innerModel = model;
        this.loginView = view.loginView;
    }

    start()
    {
        this.connect();

        console.log("Im starting...")
    }

	connect()
	{
        this.loginView.addEventListener('login', async (event) =>
        {
            const { username, password } = event.detail;

            let loginResult = await this.innerModel.logUser(username, password);

            if (loginResult)
            {
                console.log("User logged");
            }

            console.log("Login result: " + loginResult);

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

export { GameController };