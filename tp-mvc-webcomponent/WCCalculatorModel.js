class WCCalculatorModel
{
	constructor(){};

	async calculateResult(expression)
	{
		return fetch('./api/calculate.php', { method:'post', body: JSON.stringify(expression) } ).then( );
	}
}

export {WCCalculatorModel };