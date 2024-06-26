import React from 'react';
import styles from './ContactFrom.module.css';
import ActionButton from '../Buttons/ActionButton/ActionButton';
import { useForm } from 'react-hook-form';

interface FormData {
	name: string;
	email: string;
	message: string;
}

interface Props {
	id: string;
}

const ContactForm = ({ id }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<div id='contact' className={styles.contactContainer}>
			<div className={`sectionHeader ${styles.contactHeader}`}>
				<h2>Contact</h2>
				<p>
					I would love to hear about your project and how I could
					help. Please fill in the form, and I'll get back to you as
					soon as possible.
				</p>
			</div>
			<div className={styles.contactFormContainer}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register('name', { required: 'Name is required' })}
						placeholder='NAME'
						className={styles.input}
					/>
					{errors.name && <p>Name is required.</p>}

					<input
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^\S+@\S+\.\S+$/,
								message: 'Please enter a valid email',
							},
						})}
						placeholder='EMAIL'
						className={styles.input}
					/>
					{errors.email && <p>{errors.email.message}</p>}

					<textarea
						{...register('message', {
							required: 'Message is required',
						})}
						placeholder='MESSAGE'
						className={styles.textarea}></textarea>
					{errors.message && <p>{errors.message.message}</p>}

					<ActionButton textOfButton='SEND MESSAGE' />
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
