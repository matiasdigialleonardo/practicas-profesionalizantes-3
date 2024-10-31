export class LobbyView extends HTMLElement {
    constructor() {
        super();

        this.testBtn = document.createElement("button");
        this.testBtn.innerText = "Send message";

        this.readyBtn = document.createElement("button");
        this.readyBtn.innerText = "Ready";

        this.startBtn = document.createElement("button");
        this.startBtn.innerText = "Start";

        this.appendChild(this.testBtn);
        this.appendChild(this.readyBtn);
        this.appendChild(this.startBtn);

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

        this.startBtn.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('playerPressedStartBtn', {}));
        });
        
        this.startBtn.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('combatStarted', {}));
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