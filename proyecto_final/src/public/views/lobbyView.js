export class LobbyView extends HTMLElement {
    constructor() {
        super();

        // this.testBtn = document.createElement("button");
        // this.testBtn.innerText = "Send message";

        // this.readyBtn = document.createElement("button");
        // this.readyBtn.innerText = "Ready";

        let startBtnContainer = document.createElement("div");
        startBtnContainer.classList.add("startBtnContainer")

        this.startBtn = document.createElement("button");
        this.startBtn.innerText = "Iniciar";
        this.startBtn.classList.add("startBtn")

        // this.appendChild(this.testBtn);
        // this.appendChild(this.readyBtn);

        startBtnContainer.appendChild(this.startBtn);
        this.appendChild(startBtnContainer);

    }

    connectedCallback() {
        // this.testBtn.addEventListener('click', () => {
        //     const text = 'Example test';
        //     this.dispatchEvent(new CustomEvent('userClickedBtn', { detail: text }));
        // }); 

        // this.readyBtn.addEventListener('click', () => {
        //     console.log("pressed")
        //     this.dispatchEvent(new CustomEvent('playerPressedReadyBtn', {}));
        // });

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

customElements.define('x-app-lobbyview', LobbyView);