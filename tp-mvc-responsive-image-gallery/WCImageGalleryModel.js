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

	addImage(url){

		const image = this.getImage(url);

		this._images.push(image);

		console.log(this._images)
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