import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import welcomeAnimation from './animationStart.json';

const WelcomeAnimation = () => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Player
				autoplay
				loop
				src={welcomeAnimation}
				style={{ width: '300px', height: '300px' }}
			/>
		</div>
	);
};

export default WelcomeAnimation;
