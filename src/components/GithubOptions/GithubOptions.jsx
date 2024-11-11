import React from 'react';
import './styles/GithubOptions.css';

const GithubOptions = ({ actionProvider }) => {
	const githubOptions = [
		{
			text: 'David Sheinbein',
			handler: actionProvider.githubDavidSheinbein,
			id: 1,
		},
	];

	return (
		<div className='github-options-container'>
			{githubOptions.map((option) => (
				<button
					key={option.id}
					onClick={option.handler}
					className='github-option-button'
				>
					{option.text}
				</button>
			))}
		</div>
	);
};

export default GithubOptions;
