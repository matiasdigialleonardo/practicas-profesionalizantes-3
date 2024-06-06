import { WCCalculatorModel } from './WCCalculatorModel.js';
import { WCCalculatorView } from './WCCalculatorView.js';

function main()
{
	let calculatorModel = new WCCalculatorModel();
	let calculatorView = new WCCalculatorView(calculatorModel);

	document.body.appendChild(calculatorView);
}

window.onload = main;

export { main };