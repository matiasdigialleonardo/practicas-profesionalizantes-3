export class UserController
{
	constructor( model, view )
	{
		this.innerModel = model;
		this.innerView = view;		
	}

	connect()
	{
        this.innerView.addEventListener('login', (event) =>
        {
            const { username, password } = event.detail;
            let loginResult = this.handleLogin(username, password);

            if (loginResult)
            {
                console.log("User logged");
            }

            console.log(loginResult);

        } );
	}



	disconnect()
	{
		//To-do...
	}

    handleLogin(username, password)
	{
		let loginResult = this.innerModel.logUser(username, password);

        return loginResult;
	}

}