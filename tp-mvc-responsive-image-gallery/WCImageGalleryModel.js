import { Image } from "./image.js"

class WCImageGalleryModel
{
	constructor(){
		this._images = [];
	};

	getImage(url){
		const image = new Image(url);

		return image;
	}

	addImage(image){
		this._images.push(image);
	}

	removeImage(id) {
		const index = this.images.findIndex(image => image.id === id);
		if (index !== -1) {
		  this._images.splice(index, 1);
		} else {
		  console.log('Image not found');
		}
	}

	

}

export {WCImageGalleryModel };