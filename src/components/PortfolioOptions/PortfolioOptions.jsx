import React from 'react';
import './styles/PortfolioOptions.css';

const PortfolioOptions = ({ actionProvider }) => {
	const portfolioOptions = [
		{
			text: 'David Sheinbein',
			handler: actionProvider.portfolioDavidSheinbein,
			id: 1,
		},
	];

	return (
		<div className='portfolio-options-container'>
			{portfolioOptions.map((option) => (
				<button
					key={option.id}
					onClick={option.handler}
					className='portfolio-option-button'>
					{option.text}
				</button>
			))}
		</div>
	);
};

export default PortfolioOptions;
