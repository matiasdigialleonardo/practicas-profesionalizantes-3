class WCImageGalleryController
{
	constructor(viewInstance, modelInstance)
	{		
		this.innerView = viewInstance;
		this.innerModel = modelInstance;
	}

	getImages()
	{
		const images = this.innerModel._images;

		return images;
	}

	addImage(url)
	{
		this.innerModel.addImage(url);
	}
}

export { WCImageGalleryController };