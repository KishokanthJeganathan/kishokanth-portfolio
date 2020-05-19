import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styles from '../newsletterForm/newsletterForm.module.css';
import { Col, Row } from 'react-bootstrap';
import Tittle from '../../global/Tittle/Tittle';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	query {
		allContentfulSectionTittles {
			nodes {
				subtittle
				tittle
			}
		}
	}
`;

export default function NewsletterForm() {
	const data = useStaticQuery(query);
	const { tittle, subtittle } = data.allContentfulSectionTittles.nodes[3];
	const [ email, setEmail ] = useState('');
	const [ checkbox, setCheckbox ] = useState(false);
	const [ submissionMessege, setSubmissionMessege ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (checkbox === true) {
			addToMailchimp(email)
				.then((data) => {
					setSubmissionMessege(
						<p>{`${data.msg === 'Thank you for subscribing!'
							? 'Thank you for subscribing! 🎉'
							: data.msg}`}</p>
					);
					setEmail('');
					setCheckbox(!checkbox);
				})
				.catch((errors) => {
					setSubmissionMessege(
						<p>Uhoh, I cant register this email due to some reason. Maybe there is a typo? 🤔</p>
					);
					setEmail('');
					setCheckbox(!checkbox);
				});
		} else {
			setSubmissionMessege(<p className={styles.checkboxReminder}>Please agree to share your data 😊</p>);
		}
	};

	return (
		<Col xs={12} className={styles.newsletterForm}>
			<Row>
				<Tittle tittle={`${tittle} 🔥`} subtittle={`${subtittle}`} />
				<Col xs={12}>
					{submissionMessege}
					<form onSubmit={handleSubmit}>
						<label htmlFor="email address" className={styles.label}>
							<p>Where can I reach you?</p>
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className={styles.input}
						/>
					</form>

					<span className={styles.checkbox}>
						<input
							type="checkbox"
							onChange={() => setCheckbox(!checkbox)}
							name="checkbox"
							value={checkbox}
							checked={checkbox}
						/>
						<label htmlFor="checkbox for GDPR compliance" className={styles.label}>
							<p className={styles.disclaimer}>Follow rules</p>
						</label>
					</span>
					<button onClick={handleSubmit} className={styles.button}>
						Sign Up
					</button>
				</Col>
			</Row>
		</Col>
	);
}
