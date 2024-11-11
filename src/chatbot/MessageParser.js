class MessageParser {
	constructor(actionProvider) {
		this.actionProvider = actionProvider;
	}

	parse(message) {
		const lowercase = message.toLowerCase();
		const uppercase = message.toUpperCase();

		const triggers = [
			{
				keywords: ['hello', 'hi', 'hey'],
				action: this.actionProvider.greet,
			},
			{
				keywords: ['option', 'options'],
				action: this.actionProvider.mainOptions,
			},
			{
				keywords: ['bot', 'robot'],
				action: this.actionProvider.robot,
			},
			{
				keywords: [
					"what's up",
					'how are you',
					"how's it going",
				],
				action: this.actionProvider.howAreYou,
			},
			{
				keywords: ['joke', 'funny'],
				action: this.actionProvider.funny,
			},
			{
				keywords: ['haha', 'lol'],
				action: this.actionProvider.haha,
			},
			{
				keywords: ['friend'],
				action: this.actionProvider.friends,
			},
			{
				keywords: ['information', 'info'],
				action: this.actionProvider.handleGreetingBox,
			},
			{
				keywords: ['github', 'git'],
				action: this.actionProvider.githubOptions,
			},
			{
				keywords: ['port', 'portfolio', 'portfolios'],
				action: this.actionProvider.portfolioOptions,
			},
		];

		triggers.forEach(({ keywords, action }) => {
			if (
				keywords.some(
					(keyword) =>
						lowercase.includes(keyword) ||
						uppercase.includes(keyword)
				)
			) {
				action();
			}
		});
	}
}

export default MessageParser;
