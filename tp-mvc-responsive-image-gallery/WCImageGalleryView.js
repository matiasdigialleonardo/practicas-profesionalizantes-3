import { WCCalculatorController } from "./WCCalculatorController.js";

class WCCalculatorView extends HTMLElement
{
	constructor(modelInstance)
	{
		super();

		this._innerController = new WCCalculatorController(this, modelInstance);
		
		this._imageDiv = document.createElement('div');

		this._imageAnchor = document.createElement('a');

        this._table.appendChild(this._tableBody);

		const displayTableRow = this._table.insertRow();
		const sevenTableRow = this._table.insertRow();
		const fourTableRow = this._table.insertRow();
		const oneTableRow = this._table.insertRow();
		const zeroTableRow = this._table.insertRow();
		const clearTableRow = this._table.insertRow();

		// Los botones van antes de la tabla porque son cosas que despues van en la tabla.



		this.displayInput = document.createElement("input");

		this.button0 = document.createElement('button');
		this.button1 = document.createElement('button');
		this.button2 = document.createElement('button');
		this.button3 = document.createElement('button');
		this.button4 = document.createElement('button');
		this.button5 = document.createElement('button');
		this.button6 = document.createElement('button');
		this.button7 = document.createElement('button');
		this.button8 = document.createElement('button');
		this.button9 = document.createElement('button');

		this.buttonPlus = document.createElement('button');
		this.buttonMinus = document.createElement('button');
		this.buttonProduct = document.createElement('button');
		this.buttonDivision = document.createElement('button');

		this.buttonDecimal = document.createElement('button');
		this.buttonCalculate = document.createElement('button');
		this.buttonClear = document.createElement("button");

		this.button0.textContent = "0";
		this.button1.textContent = "1";
		this.button2.textContent = "2";
		this.button3.textContent = "3";
		this.button4.textContent = "4";
		this.button5.textContent = "5";
		this.button6.textContent = "6";
		this.button7.textContent = "7";
		this.button8.textContent = "8";
		this.button9.textContent = "9";

		this.buttonPlus.textContent = "+";
		this.buttonMinus.textContent = "-";
		this.buttonProduct.textContent = "*";
		this.buttonDivision.textContent = "/";

		this.buttonDecimal.textContent = ".";
		this.buttonCalculate.textContent = "=";
		this.buttonClear.textContent = "BORRAR";

		this.displayInput.classList.add("displayResult");

		this.button0.classList.add("numberButton");
		this.button1.classList.add("numberButton");
		this.button2.classList.add("numberButton");
		this.button3.classList.add("numberButton");
		this.button4.classList.add("numberButton");
		this.button5.classList.add("numberButton");
		this.button6.classList.add("numberButton");
		this.button7.classList.add("numberButton");
		this.button8.classList.add("numberButton");
		this.button9.classList.add("numberButton");

		this.buttonPlus.classList.add("operatorButton");
		this.buttonMinus.classList.add("operatorButton");
		this.buttonProduct.classList.add("operatorButton");
		this.buttonDivision.classList.add("operatorButton");

		this.buttonDecimal.classList.add("numberButton");
		this.buttonCalculate.classList.add("calculateButton");
		this.buttonClear.classList.add("clearButton");

		this.displayCell = displayTableRow.insertCell()
		this.displayCell.colSpan = 4;
		this.displayCell.appendChild(this.displayInput);

		sevenTableRow.insertCell().appendChild(this.button7);
		sevenTableRow.insertCell().appendChild(this.button8);
		sevenTableRow.insertCell().appendChild(this.button9);
		sevenTableRow.insertCell().appendChild(this.buttonPlus);

		fourTableRow.insertCell().appendChild(this.button4);
		fourTableRow.insertCell().appendChild(this.button5);
		fourTableRow.insertCell().appendChild(this.button6);
		fourTableRow.insertCell().appendChild(this.buttonMinus);

		oneTableRow.insertCell().appendChild(this.button1);
		oneTableRow.insertCell().appendChild(this.button2);
		oneTableRow.insertCell().appendChild(this.button3);
		oneTableRow.insertCell().appendChild(this.buttonProduct);

		zeroTableRow.insertCell().appendChild(this.button0);
		zeroTableRow.insertCell().appendChild(this.buttonDecimal);
		zeroTableRow.insertCell().appendChild(this.buttonCalculate);
		zeroTableRow.insertCell().appendChild(this.buttonDivision);

		const clearTableCell = clearTableRow.insertCell()
		clearTableCell.colSpan = 4;
		clearTableCell.appendChild(this.buttonClear);

		this.appendChild(this._table)

	}
	
	updateDisplayWith( data )
	{
		let expression = this.getExpression() + data;

		this.clearDisplay();

		this.displayInput.value = expression;
	}

	showResult( result )
	{
		this.displayInput.value = result;
	}

	clearDisplay()
	{
		this.displayInput.value = "";
	}

	getExpression()
	{
		return this.displayInput.value;
	}

	connectedCallback()
	{
		this.button0.onclick = this._innerController.onButton0Click.bind(this._innerController);
		this.button1.onclick = this._innerController.onButton1Click.bind(this._innerController);
		this.button2.onclick = this._innerController.onButton2Click.bind(this._innerController);
		this.button3.onclick = this._innerController.onButton3Click.bind(this._innerController);
		this.button4.onclick = this._innerController.onButton4Click.bind(this._innerController);
		this.button5.onclick = this._innerController.onButton5Click.bind(this._innerController);
		this.button6.onclick = this._innerController.onButton6Click.bind(this._innerController);
		this.button7.onclick = this._innerController.onButton7Click.bind(this._innerController);
		this.button8.onclick = this._innerController.onButton8Click.bind(this._innerController);
		this.button9.onclick = this._innerController.onButton9Click.bind(this._innerController);

		this.buttonPlus.onclick = this._innerController.onButtonPlusClick.bind(this._innerController);
		this.buttonMinus.onclick = this._innerController.onButtonMinusClick.bind(this._innerController);
		this.buttonProduct.onclick = this._innerController.onButtonProductClick.bind(this._innerController);
		this.buttonDivision.onclick = this._innerController.onButtonDivisionClick.bind(this._innerController);

		this.buttonDecimal.onclick = this._innerController.onButtonDecimalClick.bind(this._innerController);
		this.buttonClear.onclick = this._innerController.onButtonClearClick.bind(this._innerController);
		this.buttonCalculate.onclick = this._innerController.onButtonCalculateClick.bind(this._innerController);
	}

	disconnectedCallback()
	{

	}

	adoptedCallback()
	{

	}

	attributeChangedCallback(oldValue, newValue)
	{

	}

	static observableAttributes()
	{
		return [];
	}
}

customElements.define('wc-view', WCCalculatorView);

export { WCCalculatorView };