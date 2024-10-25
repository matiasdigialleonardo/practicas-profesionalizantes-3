const BASE_URL = "http://localhost:3000"
import { PlayerModel } from './playerModel.js'

/* 
    Here we defined stuff like scores, logic on how to game is won and doesnt have any information
    about the view or the controller.
*/

class GameModel extends EventTarget {
    constructor() {

        super();

        this.connection = io(BASE_URL);
        this.player = new PlayerModel();
        
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

                this.dispatchEvent(new CustomEvent("userLogged", {}));
                
            }

        // Dispatch error informing about an invalid login (later).
        } catch (error) {
            console.error('Error logging in:', error);
            return false;
        }
    }

    playerPressedStartBtn()
    {
        this.dispatchEvent(new CustomEvent("Player ready", {}));
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


    
}

export { GameModel };