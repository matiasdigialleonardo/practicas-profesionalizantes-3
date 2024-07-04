import { Image } from "./image.js"

class WCImageGalleryModel extends EventTarget
{
	constructor(){
		super();
		this._images = [];
	};

	getImage(url, caption) {
		const image = new Image(url, caption);

		return image;
	}

	getImages(){
		return this._images;
	}

	addImage(url, caption) {
		const image = this.getImage(url, caption);
		this._images.push(image);

		// Send the images list within the imageAdded event
		const event = new CustomEvent('imageAdded', {
			detail: {
				images: this._images
			}
		});

		this.dispatchEvent(event);
	}

	removeImage(id) {
		const index = this._images.findIndex(image => image.id === id);
		if (index !== -1) {
		  this._images.splice(index, 1);
		} else {
		  console.log('Image not found');
		}
	}

	

}

export {WCImageGalleryModel };