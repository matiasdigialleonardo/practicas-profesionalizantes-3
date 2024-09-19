import { LoginView } from './loginView.js'

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

class GameView extends HTMLElement {
    constructor() {
        super();

        this.loginView = new LoginView();
        this.append(this.loginView);

    }

    getViewMyName(viewName) {
        switch (viewName) {
            case 'login':
                return this.loginView;
            default:
                return null;
        }
    }

    renderView(viewName) {
        removeAllChildNodes(this);

        switch (viewName) {
            case 'login':
                this.appendChild(this.loginView);
            default:
                return null;
        }
    }
}

customElements.define('wc-gv', GameView);

export { GameView };