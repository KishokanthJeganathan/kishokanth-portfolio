import React from 'react';
import { graphql } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import TextHolder from '../components/casestudy/TextHolder/TextHolder';
import ImageHolder from '../components/casestudy/imageHolder/ImageHolder';
import styles from '../templates/caseStudy.module.css';
import Img from 'gatsby-image';
import globalstyles from '../components/global/global.module.css';
import Layout from '../components/global/layout/Layout';
import BackgroundCta from '../components/casestudy/backgroundCta/BackgroundCta';
import SEO from '../components/global/seo';
import { Link } from 'gatsby';

export const query = graphql`
	query($slug: String) {
		contentfulMyPortfolio(slug: { eq: $slug }) {
			nameOfProject
			ctaText {
				internal {
					content
				}
			}
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
			portfolioCoverImage {
				fluid {
					...GatsbyContentfulFluid
				}
				title
			}
			metaDescription
			metaImageLink
		}
	}
`;

export default function caseStudy({ data }) {
	const {
		content1,
		content2,
		content3,
		content4,
		heading1,
		heading2,
		heading3,
		heading4,
		image2,
		image3,
		image4,
		nameOfProject,
		portfolioCoverImage,
		projectIntro,
		quote,
		quoteGiverTittle,
		quoteImage,
		quoteName,
		scopeOfWork,
		stacksInvolved,
		ctaText
	} = data.contentfulMyPortfolio;

	return (
		<Layout>
			<SEO
				title={data.contentfulMyPortfolio.nameOfProject}
				description={data.contentfulMyPortfolio.metaDescription}
				image={data.contentfulMyPortfolio.metaImageLink}
			/>
			<Row>
				<Col xs={12} md={9} lg={6} className={styles.intro}>
					<h1 className={styles.h1}>{nameOfProject}</h1>
					<p className={styles.headingP}>{projectIntro.projectIntro}</p>
				</Col>
				<Col xs={12}>
					<Row className={styles.projectDetails}>
						<Col xs={12} md={4}>
							<p className={styles.contentPLg}>Scope of Work: </p>
							<p className={styles.contentPSm}>{scopeOfWork.scopeOfWork}</p>
						</Col>
						<Col xs={12} md={5}>
							<p className={styles.contentPLg}> Stack:</p>
							<p className={styles.contentPSm}>{stacksInvolved.stacksInvolved}</p>
						</Col>
						<Col xs={12} md={3}>
							<p className={styles.contentPLg}>Interested?</p>
							<a href="mailto:hello@kishokanth.com" className={styles.emailAddress}>
								Let's Talk!
							</a>
						</Col>
					</Row>
				</Col>
				<Col xs={12} className={styles.portfolioCoverImage}>
					<Img fluid={portfolioCoverImage.fluid} alt={portfolioCoverImage.title} />
				</Col>
				<Col xs={12} className={styles.content1Holder}>
					<TextHolder h2={heading1} p={content1.content1} xs="12" md="8" pcolor="grey" />
				</Col>
			</Row>
			<Col className={styles.content2Holder} xs={12}>
				<Row className={styles.contentHolderMd}>
					<ImageHolder src={image2.fluid} xs="12" md="5" alt={image2.title} />
					<TextHolder h2={heading2} p={content2.content2} xs="12" md="7" pcolor="grey" />
				</Row>
				<Row className={styles.contentHolderSm}>
					<TextHolder h2={heading2} p={content2.content2} xs="12" md="7" pcolor="grey" />
					<ImageHolder src={image2.fluid} xs="12" md="5" alt={image2.title} />
				</Row>
			</Col>
			<Col className={styles.content3Holder} xs={12}>
				<Row>
					<TextHolder h2={heading3} p={content3.content3} xs="12" md="7" pcolor="grey" />
					<ImageHolder src={image3.fluid} xs="12" md="5" alt={image3.title} />
				</Row>
			</Col>
			<Col className={styles.content4Holder} xs={12}>
				<Row className={styles.contentHolderMd}>
					<ImageHolder src={image4.fluid} xs="12" md="5" alt={image4.title} />
					<TextHolder h2={heading4} p={content4.content4} xs="12" md="7" pcolor="grey" />
				</Row>
				<Row className={styles.contentHolderSm}>
					<TextHolder h2={heading4} p={content4.content4} xs="12" md="7" pcolor="grey" />
					<ImageHolder src={image4.fluid} xs="12" md="5" alt={image4.title} />
				</Row>
			</Col>
			<Col xs={12}>
				<Row className={styles.quoteHolder}>
					<Col sm={12} md={8}>
						<span className={styles.quoteSign}>"</span>
						<p className={globalstyles.p3}>{quote.quote}</p>

						<div className={styles.quoteProviderDetails}>
							<img
								src={quoteImage.fluid.src}
								alt={`headshot of ${data.contentfulMyPortfolio.quoteName}`}
							/>
							<div>
								<p className={styles.contentPSm}>{quoteName}</p>
								<p className={styles.contentPSm}>{quoteGiverTittle}</p>
							</div>
						</div>
					</Col>
				</Row>
			</Col>
			<Col className={styles.ctaHolder}>
				<BackgroundCta fluid={portfolioCoverImage.fluid} height="25vh">
					<div className={styles.ctaContent}>
						<p className={styles.ctaQuestion}>{ctaText.internal.content}</p>
						<Link to="/contact" className={styles.button}>
							Let's talk!
						</Link>
					</div>
				</BackgroundCta>
			</Col>
		</Layout>
	);
}
