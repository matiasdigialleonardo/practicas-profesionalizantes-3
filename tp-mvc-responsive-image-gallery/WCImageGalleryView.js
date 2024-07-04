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

		this.addImageButton = document.createElement("button");
		this.addImageButton.innerText = "Add another image";

		// Create the form elements
		this.form = document.createElement("form");

		const urlLabel = document.createElement("label");
		urlLabel.innerText = "Image URL: ";
		this.urlInput = document.createElement("input");
		this.urlInput.type = "text";

		const captionLabel = document.createElement("label");
		captionLabel.innerText = "Caption: ";
		this.captionInput = document.createElement("input");
		this.captionInput.type = "text";

		const submitButton = document.createElement("button");
		submitButton.type = "submit";
		submitButton.innerText = "Add Image";

		// Append form elements
		this.form.appendChild(urlLabel);
		this.form.appendChild(this.urlInput);
		this.form.appendChild(captionLabel);
		this.form.appendChild(this.captionInput);
		this.form.appendChild(submitButton);

		this.appendChild(title);
		this.appendChild(subTitle);

		this.appendChild(this.addImageButton);

		this.appendChild(this._imagesContainer);

	}
	
	connectedCallback()
	{
		this.addImageButton.onclick = this.handleAddImageButtonClick.bind(this);


	}

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

	handleAddImageButtonClick() {
		const url = prompt('Enter the image URL:');
		if (url) {
		  this._innerController.addImage(url);
		}
	}

	updateDisplay(images)
	{
		removeAllChildNodes(this._imagesContainer)

		console.log("Is this being console logged : " + images);

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
			galleryDiv.appendChild(imgAnchor);
			galleryDiv.appendChild(imgDescriptionDiv);
			imgAnchor.appendChild(img);

			this._imagesContainer.appendChild(responsiveDiv);

		}
	}
}

customElements.define('wc-view', WCImageGalleryView);

export { WCImageGalleryView };