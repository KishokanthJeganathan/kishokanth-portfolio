import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import TextHolder from '../components/casestudy/TextHolder/TextHolder';
import ImageHolder from '../components/casestudy/imageHolder/ImageHolder';
import BackgroundImage from 'gatsby-background-image';
import styles from '../templates/caseStudy.module.css';
import Img from 'gatsby-image';
import globalstyles from '../components/global/global.module.css';

import Layout from '../components/global/layout/Layout';

export const query = graphql`
	query($slug: String) {
		contentfulMyPortfolio(slug: { eq: $slug }) {
			nameOfProject
			projectIntro {
				projectIntro
			}
			heading1
			heading2
			heading3
			heading4
			headerimage {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			content1 {
				content1
			}
			content2 {
				content2
			}
			content3 {
				content3
			}
			content4 {
				content4
			}
			image1 {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			image2 {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			image3 {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			image4 {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			quote {
				quote
			}
			quoteName
			quoteImage {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			quoteGiverTittle
			scopeOfWork {
				scopeOfWork
			}
			stacksInvolved {
				stacksInvolved
			}
			linkToFinalProduct {
				linkToFinalProduct
			}
			cta {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			portfolioCoverImage {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
		}
	}
`;

export default function caseStudy({ data }) {
	const {
		content1,
		content2,
		content3,
		content4,
		cta,
		headerimage,
		heading1,
		heading2,
		heading3,
		heading4,
		image1,
		image2,
		image3,
		image4,
		linkToFinalProduct,
		nameOfProject,
		portfolioCoverImage,
		projectIntro,
		quote,
		quoteGiverTittle,
		quoteImage,
		quoteName,
		scopeOfWork,
		stacksInvolved
	} = data.contentfulMyPortfolio;

	console.log(data);
	return (
		<Layout>
			<Row>
				<Col xs={11} md={9} className={styles.intro}>
					<h1 className={styles.h1}>{nameOfProject}</h1>
				</Col>
				<Col xs={12}>
					<Row>
						<Col xs={12} md={6}>
							<p>Scope of Work: {scopeOfWork.scopeOfWork}</p>
						</Col>
						<Col xs={12} md={6}>
							<p> Stack: {stacksInvolved.stacksInvolved}</p>
						</Col>
					</Row>
				</Col>
				<Col xs={12}>
					<Img fluid={portfolioCoverImage.fluid} />
				</Col>
				<TextHolder h1={heading1} p={content1.content1} xs="12" md="10" />
			</Row>
		</Layout>
	);
}
