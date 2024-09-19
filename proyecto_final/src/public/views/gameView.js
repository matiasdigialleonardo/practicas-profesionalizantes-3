import { LoginView } from './loginView.js'
import { LobbyView } from './lobbyView.js'

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

class GameView extends HTMLElement {
    constructor() {
        super();

        this.loginView = new LoginView();
        this.lobbyView = new LobbyView();
        this.append(this.loginView);

    }

    getViewMyName(viewName) {
        switch (viewName) {
            case 'login':
                return this.loginView;
            case 'lobby':
                return this.lobbyView;
            default:
                return null;
        }
    }

    renderView(viewName) {
        removeAllChildNodes(this);

        switch (viewName) {
            case 'login':
                this.appendChild(this.loginView);
            case 'lobby':
                this.appendChild(this.lobbyView);
            default:
                return null;
        }
    }
}

customElements.define('wc-gv', GameView);

export { GameView };