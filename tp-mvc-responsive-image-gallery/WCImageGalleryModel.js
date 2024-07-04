import { Image } from "./image.js"

class WCImageGalleryModel extends EventTarget
{
	constructor(){
		super();
		this._images = [];
	};

	getImage(url){
		const image = new Image(url);

		return image;
	}

	getImages(){
		return this._images;
	}

  addImage(url){
    const image = this.getImage(url);
    this._images.push(image);
    
    // Create and dispatch a custom event with the images in the detail
    const event = new CustomEvent('imageAdded', {
      detail: {
        images: this._images
      }
    });
    this.dispatchEvent(event);
    console.log(this._images);
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