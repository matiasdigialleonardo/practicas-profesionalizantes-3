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

const BASE_URL = "http://localhost:3000"

class GameModel extends EventTarget {
    constructor() {

        super();

        this.is_authenticated = false;
    }

    async logUser(username, password) {
        try {
            const response = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                this.is_authenticated = true;

                this.dispatchEvent(new CustomEvent("userLogged", {}))



                return true;
            } else {
                this.is_authenticated = false;
                return false;
            }

        } catch (error) {
            console.error('Error logging in:', error);
            this.is_authenticated = false;
            return false;
        }


    }

    is_user_authenticated() {
        return this.is_authenticated;
    }
}

export { GameModel };