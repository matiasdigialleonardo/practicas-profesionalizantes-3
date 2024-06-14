import { WCImageGalleryModel } from './WCImageGalleryModel.js';
import { WCImageGalleryView } from './WCImageGalleryView.js';

function main()
{
	let ImageGalleryModel = new WCImageGalleryModel();
	let ImageGalleryView = new WCImageGalleryView(ImageGalleryModel);

	document.body.appendChild(ImageGalleryView);

	ImageGalleryView.updateDisplay();
}

window.onload = main;

export { main };