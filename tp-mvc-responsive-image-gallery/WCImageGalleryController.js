class WCImageGalleryController
{
	constructor(viewInstance, modelInstance)
	{		
		this.innerView = viewInstance;
		this.innerModel = modelInstance;
	}

	getImages()
	{
		const images = this.innerModel.images;

		return images;
	}
}

export { WCImageGalleryController };