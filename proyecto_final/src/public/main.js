import { GameApplication } from './gameApplication.js';

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function main()
{
	const gameApplication = new GameApplication();

    document.body.appendChild(gameApplication);
    
}

window.onload = main;

export { main };