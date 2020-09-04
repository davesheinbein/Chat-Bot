import React from 'react';

import './styles/Options.css';

const Options = (props) => {
	const options = [
		{
			text: 'Information',
			handler: props.actionProvider.handleinfoBox,
			id: 1,
		},
		{ text: 'Github', handler: () => {}, id: 2 },
		{ text: 'Portfolio', handler: () => {}, id: 3 },
	];

	const buttonsMarkup = options.map((option) => (
		<button
			key={option.id}
			onClick={option.handler}
			className='option-button'>
			{option.text}
		</button>
	));

	return (
		<div className='options-container'>{buttonsMarkup}</div>
	);
};

export default Options;
