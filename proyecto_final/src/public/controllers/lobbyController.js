class LobbyController
{
    constructor(view, model)
    {
        this.innerView = view;
        this.innerModel = model;
    }

	connect()
	{
		this.innerView.addEventListener('userClickedBtn', function(e) {
			this.innerModel.emitMessage(e.detail)
		}.bind(this));

		this.innerView.addEventListener("playerPressedReadyBtn", function(e) {
			this.innerModel.emitPlayerReadyEvent();
		}.bind(this));
	}

	is_user_authenticated()
	{
		return this.innerModel.is_user_authenticated();
	}

	disconnect()
	{
		//To-do...
	}
}

export { LobbyController };