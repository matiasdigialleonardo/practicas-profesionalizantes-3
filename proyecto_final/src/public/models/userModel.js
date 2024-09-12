const users =
[
    {
        id: 1,
        username: "a",
        password: "a",
    },
    {
        id: 2,
        username: "b",
        password: "b",
    },
]

export class UserModel
{
	constructor()
	{
        this.is_authenticated = false;
 	}

    logUser(username, password)
    {
        for (const user of users) {
            if (user.username === username && user.password === password) {
                this.is_authenticated = true;
                return true;
            }
        }
    
        return false;
    }

    is_user_authenticated()
    {
        return this.is_authenticated;
    }

}