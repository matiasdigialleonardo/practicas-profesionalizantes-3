class WCCalculatorController
{
	constructor(viewInstance, modelInstance)
	{		
		this.innerView = viewInstance;
		this.innerModel = modelInstance;
	}

	/* 
		onLoginButtonClick()
		{
			let viewData = this.innerView.queryData();

			let modelResponse = this.innerModel.login(viewData);

			this.innerView.updateWith( JSON.stringify(modelResponse) );
		}
	*/

	onButton0Click() { this.innerView.updateDisplayWith("0"); }
	onButton1Click() { this.innerView.updateDisplayWith("1"); }
	onButton2Click() { this.innerView.updateDisplayWith("2"); }
	onButton3Click() { this.innerView.updateDisplayWith("3"); }
	onButton4Click() { this.innerView.updateDisplayWith("4"); }
	onButton5Click() { this.innerView.updateDisplayWith("5"); }
	onButton6Click() { this.innerView.updateDisplayWith("6"); }
	onButton7Click() { this.innerView.updateDisplayWith("7"); }
	onButton8Click() { this.innerView.updateDisplayWith("8"); }
	onButton9Click() { this.innerView.updateDisplayWith("9"); }

	onButtonPlusClick() { this.innerView.updateDisplayWith("+"); }
	onButtonMinusClick() { this.innerView.updateDisplayWith("-"); }
	onButtonProductClick() { this.innerView.updateDisplayWith("*"); }
	onButtonDivisionClick() { this.innerView.updateDisplayWith("/"); }

	onButtonDecimalClick() { this.innerView.updateDisplayWith("."); }
	onButtonClearClick() { this.innerView.clearDisplay(); }

	onButtonCalculateClick() { 
			
		// Call the view to get expresion from display.
		let expression = this.innerView.getExpression();

		// Call the model to make the calculation.
		let result = this.innerModel.calculate(expression);

		// Call the view to update the display.
		this.innerView.showResult(result); 

	}
}

export { WCCalculatorController };