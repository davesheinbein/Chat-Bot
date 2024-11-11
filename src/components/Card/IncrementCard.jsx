import React, { useState } from 'react';
import Card from './Card';
import './styles/Card.css';

const IncrementCard = ({ informations }) => {
	const [informationIndex, setInformationIndex] = useState(0);

	const incrementIndex = () => setInformationIndex((prev) => prev + 1);

	const currentInformation = informations[informationIndex];

	if (!currentInformation) {
		return (
			<div className='optionsAdviceContainer'>
				<p className='noInfo'>Out of Information</p>
				<div className='optionsAdvice'>
					<div>Type <span>hi</span> for greeting</div>
					<div>Type <span>options</span> for main menu</div>
					<div>Type <span>robot</span> for humor</div>
					<div>Type <span>joke</span> for joke</div>
				</div>
			</div>
		);
	}

	return (
		<Card
			information={currentInformation.information}
			result={currentInformation.result}
			incrementIndex={incrementIndex}
		/>
	);
};

export default IncrementCard;
