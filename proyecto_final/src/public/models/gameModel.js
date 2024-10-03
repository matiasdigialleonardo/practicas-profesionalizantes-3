const BASE_URL = "http://localhost:3000"

class GameModel extends EventTarget {
    constructor() {

        super();

        this.connectedPlayers = [];

        // Array of connected users. Username.
        // this.connectedPlayers = [];

        // Send information with the player id.

        this.connection = io(BASE_URL);
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

            // Check the response data to see if the user and password are ok.
            // Response ok only says that the response was satisfactory.
            if (response.ok) {

                this.connectedPlayers.push({'username': username})
                console.log(this.connectedPlayers);
                this.dispatchEvent(new CustomEvent("userLogged", {}))

                return true;
            } else {
                return false;
            }

        // Dispatch error informing about an invalid login (later).
        } catch (error) {
            console.error('Error logging in:', error);
            return false;
        }


    }

    emitMessage(text) {
        if (this.connection) {
            this.connection.emit('messageEvent', { text });
        } else {
            console.error('Socket connection not established.');
        }
    }

    emitPlayerReadyEvent() {
        if (this.connection) {
            this.connection.emit('playerReady', {});
        } else {
            console.error('Socket connection not established.');
        }
    }
    
    is_user_authenticated() {
        return this.is_authenticated;
    }
}

export { GameModel };