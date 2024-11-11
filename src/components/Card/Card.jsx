import React, { useState, useEffect } from 'react';
import './styles/Card.css';

const Card = ({ information, result, incrementIndex }) => {
	const [showResult, setShowResult] = useState(false);

	useEffect(() => setShowResult(false), [information]);

	return (
		<div className='card'>
			<div className='card-container'>
				{!showResult ? information : result}
				<button
					onClick={() => setShowResult(!showResult)}
					className='card-button'>
					Swap
				</button>
			</div>
			{showResult && (
				<button
					onClick={incrementIndex}
					className='card-button'>
					Next
				</button>
			)}
		</div>
	);
};

export default Card;
