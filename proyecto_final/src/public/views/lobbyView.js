export class LobbyView extends HTMLElement {
    constructor() {
        super();

        let testText = document.createElement("div");
        testText.innerText = "Test text.";

        this.appendChild(testText);

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

customElements.define('x-app-view', LobbyView);