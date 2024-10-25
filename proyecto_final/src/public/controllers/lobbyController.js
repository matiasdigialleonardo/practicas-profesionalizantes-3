class LobbyController
{
    constructor(view, model)
    {
        this.view = view;
        this.model = model;
    }

	init()
	{
		this.view.addEventListener('userClickedBtn', function(e) {
			this.model.emitMessage(e.detail)
		}.bind(this));

		this.view.addEventListener("playerPressedReadyBtn", function(e) {
			this.model.emitPlayerReadyEvent();
		}.bind(this));

		this.view.addEventListener("playerPressedStartBtn", function(e) {
			this.model.playerPressedStartBtn();
		}.bind(this));

	}

	is_user_authenticated()
	{
		return this.model.is_user_authenticated();
	}

	disconnect()
	{
		//To-do...
	}
}

export { LobbyController };