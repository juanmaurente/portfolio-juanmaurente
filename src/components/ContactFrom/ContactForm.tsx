import React from 'react';
import styles from './ContactFrom.module.css';
import ActionButton from '../Buttons/ActionButton/ActionButton';

const ContactForm = () => {
	return (
		<>
			<div className={styles.contactContainer}>
				<div className={`sectionHeader ${styles.contactHeader}`}>
					<h2>Contact</h2>
					<p>
						I would love to hear about your project and how I could
						help. Please fill in the form, and I'll get back to you
						as soon as possible.
					</p>
				</div>
				<form action=''>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='NAME'
						className={styles.input}
					/>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='EMAIL'
						className={styles.input}
					/>
					<textarea
						name='message'
						id='message'
						rows='3'
						placeholder='MESSAGE'
						className={styles.textarea}></textarea>
					<ActionButton textOfButton='SEND MESSAGE' />
				</form>
			</div>
		</>
	);
};

export default ContactForm;
