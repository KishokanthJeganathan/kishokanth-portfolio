import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styles from '../newsletterForm/newsletterForm.module.css';
import { Col } from 'react-bootstrap';
import Tittle from '../../global/Tittle/Tittle';

export default function NewsletterForm() {
	const [ email, setEmail ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addToMailchimp(email)
			.then((data) => {
				console.log(data);
			})
			.catch((errors) => {
				console.log(errors);
			});
	};

	return (
		<Col xs={12} className={styles.newsletterForm}>
			<form onSubmit={handleSubmit}>
				<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</form>
			<button onClick={handleSubmit}>Sign Up</button>
		</Col>
	);
}
