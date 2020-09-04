class MessageParser {
	constructor(actionProvider) {
		this.actionProvider = actionProvider;
	}

	parse(message) {
		console.log(message);
		const lowercase = message.toLowerCase();
		const uppercase = message.toUpperCase();

		// Greet
		if (
			uppercase.includes('hello') ||
			uppercase.includes('hi') ||
			uppercase.includes('hey') ||
			uppercase.includes('yo') ||
			lowercase.includes('hello') ||
			lowercase.includes('hi') ||
			lowercase.includes('hey')
		) {
			this.actionProvider.greet();
		}

		// Robot
		if (
			uppercase.includes('bot') ||
			lowercase.includes('bot') ||
			uppercase.includes('robot') ||
			lowercase.includes('robot')
		) {
			this.actionProvider.robot();
		}

		// Information
		if (
			uppercase.includes('information') ||
			uppercase.includes('info') ||
			lowercase.includes('information') ||
			lowercase.includes('info')
		) {
			this.actionProvider.handleinfoBox();
		}

		// Github
		if (
			uppercase.includes('github') ||
			uppercase.includes('git') ||
			lowercase.includes('github') ||
			lowercase.includes('git')
		) {
			this.actionProvider.handleinfoBox();
		}

		// Portfolio
		if (
			uppercase.includes('Portfolios') ||
			lowercase.includes('Portfolios') ||
			uppercase.includes('Portfolio') ||
			lowercase.includes('Portfolio')
		) {
			this.actionProvider.handleinfoBox();
		}
	}
}

export default MessageParser;
