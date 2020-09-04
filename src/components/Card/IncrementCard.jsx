import React, { useState } from 'react';
import Card from './Card';

import './styles/Card.css';

const Quiz = (props) => {
	console.log(props);
	let [informationIndex, setinformationIndex] = useState(0);

	const incrementIndex = () =>
		setinformationIndex((prev) => (prev += 1));

	const currentInformation =
		props.informations[informationIndex];

	if (!currentInformation) {
		return <p className='noInfo'>Out of Information</p>;
	}

	return (
		<Card
			information={currentInformation.information}
			result={currentInformation.result}
			incrementIndex={incrementIndex}
		/>
	);
};

export default Quiz;
