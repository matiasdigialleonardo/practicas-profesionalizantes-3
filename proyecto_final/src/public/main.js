import { GameApplication } from './gameApplication.js';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function main()
{
	const gameApplication = new GameApplication();
	

}

window.onload = main;

export { main };