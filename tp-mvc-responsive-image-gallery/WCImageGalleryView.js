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

		this.appendChild(title);
		this.appendChild(subTitle);
		this.appendChild(this.addImageButton);

		this.appendChild(this._imagesContainer);

	}
	
	connectedCallback()
	{
		this.addImageButton.onclick = this.handleAddImageButtonClick.bind(this);


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

		  this.updateDisplay();
		}
	  }

	updateDisplay()
	{
		removeAllChildNodes(this._imagesContainer)

		const images = this._innerController.getImages();
		console.log(images);

		for (const image of images){
			let img = document.createElement("img");

			img.src = image.src;
			console.log("Image src is: " + image.src);
			img.alt = image.alt;
			img.width = image.width;
			img.height = image.height;

			this._imagesContainer.appendChild(img);

			console.log("a");
		}
	}
}

customElements.define('wc-view', WCImageGalleryView);

export { WCImageGalleryView };