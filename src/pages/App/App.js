import React, { Component } from 'react';
import Chatbot from 'react-chatbot-kit';

import config from '../../chatbot/config';
import ActionProvider from '../../chatbot/ActionProvider';
import MessageParser from '../../chatbot/MessageParser';

import './/styles/App.css';

console.log(
	'Robot, Dog icon made by https://www.flaticon.com/authors/eucalyp - https://www.flaticon.com/'
);
export class App extends Component {
	state = {
		menuClicked: false,
	};

	handleMenuClick = () => {
		this.setState({ menuClicked: !this.state.menuClicked });
	};

	render() {
		return (
			<div className='App'>
				<header className='App-header'>Chat Bot</header>
				<button
					className='openbtn'
					onClick={this.handleMenuClick}>
						X
				</button>
				<div
					className='sidebar'
					id='mySidebar'
					style={
						this.state.menuClicked
							? { display: 'block' }
							: { display: 'none' }
					}>
					<div className='chatbotContainer'>
						<Chatbot
							config={config}
							actionProvider={ActionProvider}
							messageParser={MessageParser}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
