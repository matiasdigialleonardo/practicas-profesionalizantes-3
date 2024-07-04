import { WCImageGalleryController } from "./WCImageGalleryController.js";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

class WCImageGalleryView extends HTMLElement
{
	constructor(modelInstance)
	{
		super();

		this._innerController = new WCImageGalleryController(this, modelInstance);
		
        this._imagesContainer = document.createElement("div");

        const title = document.createElement("h2");
        title.innerText = "Responsive Image Gallery";

        const subTitle = document.createElement("h4");
        subTitle.innerText = "Resize the browser window to see the effect.";

		// Form elements
		this.form = document.createElement("form");

		this.form.classList.add("form-class");

		const urlLabel = document.createElement("label");
		urlLabel.innerText = "Image URL: ";

		this.urlInput = document.createElement("input");
		this.urlInput.type = "text";
		this.urlInput.classList.add("input-class")

		const captionLabel = document.createElement("label");
		captionLabel.innerText = "Image description: ";

		this.captionInput = document.createElement("input");
		this.captionInput.type = "text";
		this.captionInput.classList.add("input-class");

		const submitButton = document.createElement("button");
		submitButton.type = "submit";
		submitButton.innerText = "Add Image";

		this.appendChild(title);
		this.appendChild(subTitle);

		// Append form elements to the form
		this.form.appendChild(urlLabel);
		this.form.appendChild(this.urlInput);
		this.form.appendChild(captionLabel);
		this.form.appendChild(this.captionInput);
		this.form.appendChild(submitButton);


		// Append the form
		this.appendChild(this.form);

		this.appendChild(this._imagesContainer);
	}
	
	connectedCallback()
	{
		this.form.onsubmit = this.handleFormSubmit.bind(this);
	}

	disconnectedCallback()
	{

	}

	adoptedCallback()
	{

	}

	attributeChangedCallback(oldValue, newValue)
	{

	}

	static observableAttributes()
	{
		return [];
	}


	// Handle form submit and create a new image with the received data
	handleFormSubmit(event) {
			event.preventDefault();
			const url = this.urlInput.value;
			const caption = this.captionInput.value;
			if (url && caption) {
			this._innerController.addImage(url, caption);
			this.urlInput.value = '';
			this.captionInput.value = '';
		}
	}

	updateDisplay(images)
	{
		removeAllChildNodes(this._imagesContainer)

		for (const image of images){

			const responsiveDiv = document.createElement("div");
			const galleryDiv = document.createElement("div");
			let img = document.createElement("img");
			let imgAnchor = document.createElement("a");
			let imgDescriptionDiv = document.createElement("div");

			responsiveDiv.classList.add("responsive");
			galleryDiv.classList.add("gallery");
			imgDescriptionDiv.classList.add("desc");

			imgAnchor.href = image.src;
			imgAnchor.target = "_blank";

			imgDescriptionDiv.innerText = image.alt;

			img.src = image.src;
			img.alt = image.alt;
			img.width = image.width;
			img.height = image.height;

			responsiveDiv.appendChild(galleryDiv);
			imgAnchor.appendChild(img);
			galleryDiv.appendChild(imgAnchor);
			galleryDiv.appendChild(imgDescriptionDiv);
			
			this._imagesContainer.appendChild(responsiveDiv);
		}
	}
}

customElements.define('wc-view', WCImageGalleryView);

export { WCImageGalleryView };