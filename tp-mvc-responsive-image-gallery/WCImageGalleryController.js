	class WCImageGalleryController
	{
		constructor(viewInstance, modelInstance)
		{		
			this.innerView = viewInstance;
			this.innerModel = modelInstance;

		    // Bind the updateView method to this instance
		    this.updateView = this.updateView.bind(this);

		    // Listen for the 'imageAdded' event
		    this.innerModel.addEventListener('imageAdded', this.updateView);

		}

		// Get all the images from the model
		getImages()
		{
			return this.innerModel.getImages();
		}


		addImage(url, caption) {
			this.innerModel.addImage(url, caption);
		}

		updateView(event) {
			const images = event.detail.images;
			this.innerView.updateDisplay(images);
		}
	}

	export { WCImageGalleryController };