export class LoginView extends HTMLElement {
	constructor() {
		super();

		this.outerContainer = document.createElement("div");
		this.outerContainer.classList.add("outer-container");
		
		this.pageTitle = document.createElement("div");
		this.pageTitle.classList.add("page-title");
		this.pageTitle.innerText = "Juego de laberinto";


		this.formTitle = document.createElement("h2");
		this.formTitle.classList.add("form-title");
		this.formTitle.innerText = "Ingrese sus credenciales";

		this.container = document.createElement("div");
		this.container.classList.add("form-container");

		
		this.usernameInput = document.createElement("input");
		this.passwordInput = document.createElement("input");
		this._loginBtn = document.createElement("button");
		this._loginBtn.innerText = "Ingresar";

		this.usernameInput.value = "usuario";
		this.passwordInput.value = "contraseña";

		this.outerContainer.appendChild(this.pageTitle);
		this.outerContainer.appendChild(this.container);

		this.container.appendChild(this.formTitle);
		this.container.appendChild(this.usernameInput);
		this.container.appendChild(this.passwordInput);
		this.container.appendChild(this._loginBtn);

		this.appendChild(this.outerContainer);
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