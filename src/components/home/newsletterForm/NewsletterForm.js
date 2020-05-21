import React, { useState } from 'react';
import styles from '../newsletterForm/newsletterForm.module.css';
import { Col, Row } from 'react-bootstrap';
import Tittle from '../../global/Tittle/Tittle';
import { graphql, useStaticQuery } from 'gatsby';
import EmailSubscriberForm from '../../global/emailSubscriberForm/EmailSubscriberForm';

const query = graphql`
	query {
		contentfulSectionTittles(sectionName: { eq: "subscriber" }) {
			subtittle
			tittle
		}
	}
`;

export default function NewsletterForm() {
	const data = useStaticQuery(query);
	const { tittle, subtittle } = data.contentfulSectionTittles;

	return (
		<Col xs={12} className={styles.newsletterForm}>
			<Row>
				<Tittle tittle={`${tittle} 🔥`} subtittle={`${subtittle}`} />
				<EmailSubscriberForm />
			</Row>
		</Col>
	);
}
