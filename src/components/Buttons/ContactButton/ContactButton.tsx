import React from 'react';
import styles from './ContactButton.module.css';
import { Player } from '@lottiefiles/react-lottie-player';
import animationContact from './animationContact.json';

const ContactButton = () => {
	return (
		<button className={styles.contactButton}>
			<a href='#' className={styles.contactLink}>
				Contact me
				<span className={styles.animationContainer}>
					<Player
						className={styles.animation}
						autoplay
						loop
						src={animationContact}
					/>
				</span>
			</a>
		</button>
	);
};

export default ContactButton;
