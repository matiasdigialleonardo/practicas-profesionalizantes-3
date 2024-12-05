export class GameWonView extends HTMLElement {
    constructor() {
        super();

        const message = document.createElement('div');
        message.textContent = '¡Has llegado al final! Gracias por jugar.';
        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.fontSize = '40px';
        message.style.fontWeight = 'bold';
        message.style.color = 'black';
        message.style.textAlign = 'center';
        message.style.zIndex = '1000';

        this.appendChild(message);

    }

    connectedCallback() {

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

customElements.define('x-app-gamewonview', GameWonView);