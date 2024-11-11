import React from 'react';
import robotImg from '../../../images/robot.png';
import './styles/BotAvatar.css';

const BotAvatar = () => (
	<div className='avatarIcon'>
		<img src={robotImg} alt='Robot' id='robotImg' />
	</div>
);

export default BotAvatar;
