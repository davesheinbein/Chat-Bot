import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import MainOptions from '../components/MainOptions/MainOptions';
import IncrementCard from '../components/Card/IncrementCard';
import PortfolioOptions from '../components/PortfolioOptions/PortfolioOptions';
import DavidSPortfolio from '../components/PortfolioOptions/PortfoliosCard/DavidSPortfolio/DavidSPortfolio';
import GithubOptions from '../components/GithubOptions/GithubOptions';
import DavidSGithub from '../components/GithubOptions/GithubCard/DavidSGithub/DavidSGithub';
import BotAvatar from '../components/Avatars/BotAvatar/BotAvatar';
import UserAvatar from '../components/Avatars/UserAvatar/UserAvatar';
import Info from '../components/Info/Info';

const config = {
	botName: 'Robbie Tot',
	lang: 'no',
	customComponents: {
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
			'Hello. What can I assist you with?',
			{
				widget: 'mainOptions',
				delay: 500,
			}
		),
	],
	widgets: [
		{
			widgetName: 'mainOptions',
			widgetFunc: (props) => <MainOptions {...props} />,
		},
		{
			widgetName: 'info',
			widgetFunc: (props) => <Info {...props} />,
			delay: 500,
			props: {
				data: [
					{
						question:
							"In my next job, it's important that...",
						answer:
							'I work in a collaborative environment with growth potential, autonomy, friendly communication, and flexible hours. I value the chance to showcase my work regularly.',
					},
					{
						question: 'My favorite technology is...',
						answer:
							"React. Its component-based structure and flexibility for building dynamic UIs make it ideal. While I also appreciate Angular, React's simplicity and ecosystem make it my top choice.",
					},
					{
						question: 'I like to work with people who...',
						answer:
							'Are collaborative, friendly, intelligent, and goal-driven. Effective communication and a problem-solving mindset are essential for productive teamwork.',
					},
					{
						question:
							'I want to work for a company that...',
						answer:
							'Fosters innovation, values collaboration, and prioritizes professional development, allowing me to contribute to impactful projects and grow alongside a talented team.',
					},
					{
						question: "At work, I'm best at...",
						answer:
							'Collaborating with teams to deliver high-quality solutions, breaking down complex problems, and quickly adapting to new technologies while paying attention to detail.',
					},
					{
						question: 'Outside of work, I...',
						answer:
							'Enjoy exploring new technologies, watching tutorials to enhance my skills, cooking creative dishes, and staying active with outdoor activities like hiking and camping.',
					},
					{
						question:
							"The most impactful thing I've worked on is...",
						answer:
							'Developing customer relationship portals for doctors, dentists, and veterinarians, which enabled direct communication with patients for scheduling appointments and filling out forms, significantly enhancing efficiency.',
					},
					{
						question:
							"I'm excited to work for a fast-growing company because...",
						answer:
							'It offers opportunities for innovation, professional growth, and the chance to make a meaningful impact alongside talented colleagues.',
					},
					{
						question:
							"I'm looking to move roles because...",
						answer:
							'I am eager to embrace greater challenges, mentor junior developers, and leverage my skills to contribute to team leadership and project success.',
					},
					{
						question:
							"In my next role, I'd like to learn...",
						answer:
							'Advanced technologies, enhance my leadership skills, and gain deeper insights into project management while contributing to innovative solutions and team success.',
					},
					{
						question:
							"I'm making a career change because...",
						answer:
							"I'm eager to embrace new challenges, expand my skill set, and contribute to innovative projects that align with my passion for technology and team collaboration.",
					},
					{
						question:
							'I prefer thinking about problems that are...',
						answer:
							'Related to UI and frontend development, as I enjoy creating intuitive user experiences and finding innovative solutions to enhance usability and design.',
					},
					{
						question: 'I would consider moving roles if...',
						answer:
							'The opportunity provides a collaborative culture, defined growth paths, and the chance to contribute to innovative projects that leverage my skills and expertise.',
					},
					{
						question: 'In 3-5 years, I want to be...',
						answer:
							"A well-rounded leader in software development, mentoring teams, driving innovative projects, and contributing to strategic decisions that shape our technology's future.",
					},
				],
			},
		},
		{
			widgetName: 'greeting',
			widgetFunc: (props) => <IncrementCard {...props} />,
			delay: 500,
			props: {
				informations: [
					{
						information: 'Hey buddy',
						result: 'How are you?',
						id: 1,
					},
					{
						information: "I'm good thanks for asking",
						result: 'Enough chit chat',
						id: 2,
					},
				],
			},
		},
		{
			widgetName: 'portfolioOptions',
			widgetFunc: (props) => (
				<PortfolioOptions {...props} />
			),
			delay: 500,
		},
		{
			widgetName: 'davidSPortfolio',
			widgetFunc: (props) => <DavidSPortfolio {...props} />,
			delay: 500,
		},
		{
			widgetName: 'githubOptions',
			widgetFunc: (props) => <GithubOptions {...props} />,
			delay: 500,
		},
		{
			widgetName: 'davidSGithub',
			widgetFunc: (props) => <DavidSGithub {...props} />,
			delay: 500,
		},
	],
};

export default config;
