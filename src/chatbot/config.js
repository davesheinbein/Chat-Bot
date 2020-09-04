import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import Options from '../components/Options/Options';
import Quiz from '../components/Card/IncrementCard';

import BotAvatar from '../components/Avatars/BotAvatar/BotAvatar';
import UserAvatar from '../components/Avatars/UserAvatar/UserAvatar';

const config = {
	botName: 'ChatBot',
	customComponents: {
		// Replaces the default bot avatar
		botAvatar: (props) => <BotAvatar {...props} />,
		userAvatar: (props) => <UserAvatar {...props} />,
	},
	customStyles: {
		botMessageBox: {
			backgroundColor: '#376B7E',
		},
		chatButton: {
			backgroundColor: '#5ccc9d',
		},
	},
	initialMessages: [
		createChatBotMessage(
			`Hello. What do you want to learn`,
			{
				widget: 'options',
			}
		),
	],
	widgets: [
		{
			widgetName: 'options',
			widgetFunc: (props) => <Options {...props} />,
		},
		{
			widgetName: 'infoBox',
			widgetFunc: (props) => <Quiz {...props} />,
			props: {
				informations: [
					{
						information: 'Some Info',
						result: 'This is some information',
						id: 1,
					},
					{
						information: 'Hello',
						result: 'World',
						id: 2,
					},
				],
			},
		},
	],
};

export default config;
