import React, { useState } from 'react';
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
	const { tittle, subtittle } = data.allContentfulSectionTittles.nodes[2];

	return (
		<Col xs={12} className={styles.newsletterForm}>
			<Row>
				<Tittle tittle={`${tittle} 🔥`} subtittle={`${subtittle}`} />
				<EmailSubscriberForm />
			</Row>
		</Col>
	);
}
