import React from 'react';
import Chatbot from 'react-chatbot-kit';

import config from '../../chatbot/config';
import ActionProvider from '../../chatbot/ActionProvider';
import MessageParser from '../../chatbot/MessageParser';

import './/styles/App.css';

function App() {
	console.log(
		'Robot, Dog icon made by https://www.flaticon.com/authors/eucalyp - https://www.flaticon.com/'
	);
	return (
		<div className='App'>
			<header className='App-header'>Chat Bot</header>
			<div className='chatbotContainer'>
				<Chatbot
					config={config}
					actionProvider={ActionProvider}
					messageParser={MessageParser}
				/>
			</div>
		</div>
	);
}

export default App;
