import { UserView } from './views/userView.js';
import { UserModel } from './models/userModel.js';
import { UserController } from './controllers/userController.js';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function main()
{
	let userView = new UserView();
	let userModel = new UserModel();
	let userController = new UserController(userModel, userView);

	userController.connect();

	document.body.appendChild(userView);

	setTimeout(() => {
	
		if (userController.is_user_authenticated())
		{
			removeAllChildNodes(document.body)

			// Initialize socket after user is authenticated
			// io = socketIo(server); 
			// handleSocketConnection(io);  // Pass the `io` instance to your socket logic
		}
		else
		{
			console.log("user was not authenticated")
		}

	  }, 4000); // 2000ms = 2 seconds

}

window.onload = main;

export { main };