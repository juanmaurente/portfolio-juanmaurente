import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Player } from '@lottiefiles/react-lottie-player';
import welcomeAnimation from './animationStart.json';
import styles from './AnimationWelcome.module.css';

const WelcomeAnimation = () => {
	useEffect(() => {
		const tl = gsap.timeline();
		tl.set(`.${styles.animationContainer}`, {
			opacity: 0,
		})
			.to(`.${styles.animationContainer}`, {
				duration: 1.5,
				opacity: 1,
			})
			.to(`.${styles.animationContainer}`, {
				duration: 0.5,
				opacity: 0,
			});
	}, []);

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
