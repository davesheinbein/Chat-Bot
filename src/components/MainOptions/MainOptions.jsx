import React from 'react';
import './styles/MainOptions.css';

const MainOptions = ({ actionProvider }) => {
	const mainOptions = [
		{
			text: 'Greeting',
			handler: actionProvider.handleGreetingBox,
			id: 1,
		},
		{
			text: 'Github',
			handler: actionProvider.githubOptions,
			id: 2,
		},
		{
			text: 'Portfolio',
			handler: actionProvider.portfolioOptions,
			id: 3,
		},
		{
			text: 'Info',
			handler: actionProvider.handleInfo,
			id: 4,
		},
	];

	return (
		<div className='mainOptions-container'>
			{mainOptions.map((option) => (
				<button
					key={option.id}
					onClick={option.handler}
					className='mainOptions-button'
				>
					{option.text}
				</button>
			))}
		</div>
	);
};

export default MainOptions;
