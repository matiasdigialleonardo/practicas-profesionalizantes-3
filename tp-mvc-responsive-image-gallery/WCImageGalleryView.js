import { WCImageGalleryController } from "./WCImageGalleryController.js";

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

		const testImage = document.createElement("img");
		testImage.src = "./images/DIO.jpeg"

		this.appendChild(title);
		this.appendChild(subTitle);
		this.appendChild(this.addImageButton);


		this._imagesContainer.appendChild(testImage);

		this.appendChild(this._imagesContainer);

	}
	
	connectedCallback()
	{

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

	updateDisplay()
	{
		const images = this._innerController.getImages();

		for (const image of images){
			let img = document.createElement("img");

			img.src = image.src;
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