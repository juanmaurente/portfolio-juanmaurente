import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import welcomeAnimation from './animationStart.json';
import styles from './AnimationWelcome.module.css';

const WelcomeAnimation = () => {
	return (
		<div className={styles.animationContainer}>
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
