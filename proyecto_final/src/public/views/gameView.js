import { LoginView } from './loginView.js'

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

class GameView extends HTMLElement
{
    constructor()
    {
        super();

        this.loginView = new LoginView();
        this.append(this.loginView);

    }

    // render( view )
    // {

    //     removeAllChildNodes(this.view);

    //     this.view = new view;
    // }
}

customElements.define('wc-gv', GameView);

export { GameView };