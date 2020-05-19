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
			<Row>
				<Tittle tittle={`${tittle} 🙌`} subtittle={`${subtittle}`} />
				<Col>
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
