class WCCalculatorModel
{
	constructor(){};

	calculate(expression)
	{
		return eval(expression);
	}
}

export {WCCalculatorModel };