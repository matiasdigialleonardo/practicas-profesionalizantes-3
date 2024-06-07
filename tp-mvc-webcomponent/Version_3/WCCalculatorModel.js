class WCCalculatorModel
{
	constructor(){};

	async calculateResult(expression)
	{
		return fetch('./api/calculate.php', { method:'post', body: JSON.stringify({expression: expression}) } ).then(
			response => response.json()
		);
	}
}

export {WCCalculatorModel };