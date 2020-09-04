class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	greet = () => {
		const message = this.createChatBotMessage(
			'Hello new friend. Please select an option',
			{
				widget: 'options',
			}
		);
		this.addMessageToState(message);
	};

	robot = () => {
		const message = this.createChatBotMessage(
			'Ha ha ha you are so funny. Please select an option',
			{
				widget: 'options',
			}
		);
		this.addMessageToState(message);
	};

	handleinfoBox = () => {
		const message = this.createChatBotMessage(
			'Fantastic. Here is some more information!',
			{
				widget: 'infoBox',
			}
		);

		this.addMessageToState(message);
	};

	addMessageToState = (message) => {
		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message],
		}));
	};
}

export default ActionProvider;
