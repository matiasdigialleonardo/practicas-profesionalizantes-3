const users =
[
    {
        id: 1,
        username: "a",
        password: "a",
        is_authenticated: false
    },
    {
        id: 2,
        username: "b",
        password: "b",
        is_authenticated: false
    },
]

export class UserModel
{
	constructor()
	{
 	}

    logUser(username, password)
    {
        for (const user of users) {
            if (user.username === username && user.password === password) {
                user.is_authenticated = true;
                console.log(`User ${username} authenticated.`);
                return true;
            }
        }
    
        return false;
    }
     

}