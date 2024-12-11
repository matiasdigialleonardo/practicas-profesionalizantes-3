export class LobbyView extends HTMLElement {
    constructor() {
        super();

        // this.testBtn = document.createElement("button");
        // this.testBtn.innerText = "Send message";

        // this.readyBtn = document.createElement("button");
        // this.readyBtn.innerText = "Ready";

        // this.appendChild(this.testBtn);
        // this.appendChild(this.readyBtn);
    
        let startBtnContainer = document.createElement("div");
        startBtnContainer.classList.add("startBtnContainer")

        this.textDisplay = document.createElement("div");
        this.textDisplay.classList.add("textDisplay");
        this.textDisplay.innerText = "Bienvenido a nuestro pequeño juego! \n Al tocar el boton ubicado debajo de este cuadro de texto seras presentado con un personaje que podras controlar utilizando las flechas del teclado. Tu objetivo es recorrer el laberinto y llegar a los objetivos de interes que veras en pantalla!";

        this.startBtn = document.createElement("button");
        this.startBtn.innerText = "Iniciar";
        this.startBtn.classList.add("startBtn")


        startBtnContainer.appendChild(this.textDisplay);
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