import { GameApplication } from './gameApplication.js';

function main()
{
	const gameApplication = new GameApplication();

    gameApplication.run();
    
}

window.onload = main;

export { main };