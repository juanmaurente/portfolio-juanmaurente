import React from 'react';
import styles from './ActionButton.module.css';

interface Props {
	textOfButton: string;
}

const ContactButton = ({ textOfButton }: Props) => {
	return (
		<button className={styles.actionButton}>
			<a href='#' className={styles.actionLink}>
				{textOfButton}
			</a>
		</button>
	);
};

export default ContactButton;
