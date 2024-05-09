// ActionButton component
import React from 'react';
import styles from './ActionButton.module.css';

interface Props {
	textOfButton: string;
	href?: string;
	onClick?: () => void;
}

const ActionButton = ({ textOfButton, href, onClick }: Props) => {
	if (href) {
		return (
			<a href={href} className={styles.actionButton}>
				{textOfButton}
			</a>
		);
	} else {
		return (
			<button
				type='button'
				className={styles.actionButton}
				onClick={onClick}>
				{textOfButton}
			</button>
		);
	}
};

export default ActionButton;
