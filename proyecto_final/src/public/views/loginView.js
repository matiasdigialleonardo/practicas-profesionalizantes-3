export class LoginView extends HTMLElement {
	constructor() {
		super();

		this.usernameInput = document.createElement("input");
		this.passwordInput = document.createElement("input");
		this._loginBtn = document.createElement("button");
		this._loginBtn.innerText = "Ingresar";

		this.appendChild(this.usernameInput)
		this.appendChild(this.passwordInput)
		this.appendChild(this._loginBtn)


	}

	connectedCallback() {
		this._loginBtn.addEventListener('click', () => {
			console.log("Login btn pressed.")
			const username = this.usernameInput.value;
			const password = this.passwordInput.value;
			this.dispatchEvent(new CustomEvent('login', {
				detail: { username, password }
			}));
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

customElements.define('wc-view', LoginView);