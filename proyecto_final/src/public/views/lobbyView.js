export class LobbyView extends HTMLElement {
    constructor() {
        super();

        this.testBtn = document.createElement("button");
        this.testBtn.innerText = "Send message";

        this.appendChild(this.testBtn);

    }

    connectedCallback() {
        this.testBtn.addEventListener('click', () => {
            const text = 'Example test';
            this.dispatchEvent(new CustomEvent('userClickedBtn', { detail: text }));
        }); 

    }

    disconnectedCallback() {

    }

    adoptedCallback() {

    }

    attributeChangedCallback(oldValue, newValue) {

    }

    static observableAttributes() {
        return [];
    }
}

customElements.define('x-app-view', LobbyView);