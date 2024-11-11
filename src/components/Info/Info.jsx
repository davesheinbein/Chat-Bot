import React, { useState } from 'react';
import './styles/Info.css';

const Info = ({ data }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<>
			<div className='info-container'>
				<h4>Click each question to reveal the answer</h4>
				{data.map((item, index) => (
					<div key={index} className='info-item'>
						<div
							className='info-question'
							onClick={() => handleToggle(index)}
						>
							{item.question}
						</div>
						{activeIndex === index && (
							<div className='info-answer'>
								{item.answer}
							</div>
						)}
					</div>
				))}
			</div>
			<div className='optionsAdvice'>
				<div>
					Type <span> hi </span> for greeting
				</div>
				<div>
					Type <span> options </span> for main menu
				</div>
				<div>
					Type <span> robot </span> for humor
				</div>
				<div>
					Type <span> joke </span> for joke
				</div>
			</div>
		</>
	);
};

export default Info;
