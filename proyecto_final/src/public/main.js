import { UserView } from './views/userView.js';
import { UserModel } from './models/userModel.js';
import { UserController } from './controllers/userController.js';

function main()
{
	let userView = new UserView();
	let userModel = new UserModel();
	let userController = new UserController(userModel, userView);

	userController.connect();

	document.body.appendChild(userView);
}

window.onload = main;

export { main };