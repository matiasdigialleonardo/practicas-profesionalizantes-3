export class LobbyView extends HTMLElement {
    constructor() {
        super();

        this.testBtn = document.createElement("button");
        this.testBtn.innerText = "Send message";

        this.readyBtn = document.createElement("button");
        this.readyBtn.innerText = "Ready";

        this.appendChild(this.testBtn);
        this.appendChild(this.readyBtn);

    }

    connectedCallback() {
        this.testBtn.addEventListener('click', () => {
            const text = 'Example test';
            this.dispatchEvent(new CustomEvent('userClickedBtn', { detail: text }));
        }); 

        this.readyBtn.addEventListener('click', () => {
            console.log("pressed")
            this.dispatchEvent(new CustomEvent('playerPressedReadyBtn', {}));
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