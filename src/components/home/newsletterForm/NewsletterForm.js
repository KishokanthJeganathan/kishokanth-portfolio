import React from 'react';
import styles from '../newsletterForm/newsletterForm.module.css';
import { Col } from 'react-bootstrap';
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
		<Col xs={12}>
			<span className={styles.newsletterForm}>
				<Tittle tittle={`${tittle} 🔥`} subtittle={`${subtittle}`} />
				<EmailSubscriberForm CTA="Where can I find you?" bordercolor="2px solid white" />
			</span>
		</Col>
	);
}
