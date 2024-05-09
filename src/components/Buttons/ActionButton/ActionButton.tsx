import React from 'react';
import styles from './ActionButton.module.css';

interface Props {
	textOfButton: string;
	onClick?: () => void;
}

const ActionButton = ({ textOfButton, onClick }: Props) => {
	return (
		<button type='submit' className={styles.actionButton} onClick={onClick}>
			{textOfButton}
		</button>
	);
};

export default ActionButton;
