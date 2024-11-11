class ActionProvider {
	constructor(createChatBotMessage, setStateFunc) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
	}

	greet = () => {
		const message = this.createChatBotMessage(
			'Hello new friend. Please select an option',
			{
				widget: 'mainOptions',
				delay: 500,
			}
		);
		this.addMessageToState(message);
	};

	mainOptions = () => {
		const message = this.createChatBotMessage(
			'Select an option',
			{
				widget: 'mainOptions',
			}
		);
		this.addMessageToState(message);
	};

	handleInfo = () => {
		const message = this.createChatBotMessage(
			'Information!',
			{
				widget: 'info',
			}
		);
		this.addMessageToState(message);
	};

	handleGreetingBox = () => {
		const message = this.createChatBotMessage(
			'Fantastic. Here is some more information!',
			{
				widget: 'greeting',
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

	portfolioOptions = () => {
		const message = this.createChatBotMessage(
			'Select an option',
			{
				widget: 'portfolioOptions',
			}
		);
		this.addMessageToState(message);
	};

	portfolioDavidSheinbein = () => {
		const message = this.createChatBotMessage(
			"Checkout David Sheinbein's Portfolio",
			{
				widget: 'davidSPortfolio',
			}
		);
		this.addMessageToState(message);
	};

	githubOptions = () => {
		const message = this.createChatBotMessage(
			'Select an option',
			{
				widget: 'githubOptions',
			}
		);
		this.addMessageToState(message);
	};

	githubDavidSheinbein = () => {
		const message = this.createChatBotMessage(
			"Checkout David Sheinbein's Github",
			{
				widget: 'davidSGithub',
			}
		);
		this.addMessageToState(message);
	};

	robot = () => {
		const message = this.createChatBotMessage(
			'Ha ha ha you are so funny. Please select an option',
			{
				widget: 'mainOptions',
			}
		);
		this.addMessageToState(message);
	};

	howAreYou = () => {
		const message = this.createChatBotMessage(
			"This isn't about me what do you need help with?",
			{
				widget: 'mainOptions',
			}
		);
		this.addMessageToState(message);
	};

	funny = () => {
		const message = this.createChatBotMessage(
			'What kind of shorts do clouds wear? THUNDERWEAR!',
			{
				widget: 'mainOptions',
			}
		);
		this.addMessageToState(message);
	};

	haha = () => {
		const message = this.createChatBotMessage(
			'Haha... we are friends now yes?',
			{
				widget: 'mainOptions',
			}
		);
		this.addMessageToState(message);
	};

	friends = () => {
		const message = this.createChatBotMessage(
			'Yay! Best friends forever!',
			{
				widget: 'mainOptions',
			}
		);
		this.addMessageToState(message);
	};
}

export default ActionProvider;
