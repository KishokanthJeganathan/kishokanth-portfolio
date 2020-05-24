import React from 'react';
import Tittle from '../../global/Tittle/Tittle';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import styles from '../hireMeCTA/hireMe.module.css';
import globalstyles from '../../global/global.module.css';

const query = graphql`
	{
		allContentfulCta {
			nodes {
				text {
					internal {
						content
					}
				}
			}
		}
		allContentfulEmail {
			nodes {
				email
			}
		}
		contentfulSectionTittles(sectionName: { eq: "hire" }) {
			tittle
		}
	}
`;

export default function HireMe() {
	const data = useStaticQuery(query);
	const info = data.contentfulSectionTittles;
	const { tittle } = info;
	const CTA = data.allContentfulCta.nodes[0].text.internal.content;

	return (
		<Col xs={12}>
			<Row>
				<Col xs={12}>
					<span className={styles.hireMe}>
						<Tittle tittle={`${tittle} 💻`} padding="0" />
						<span className={styles.content}>
							<p className={globalstyles.p}>{CTA}</p>
							<p className={globalstyles.p1}>
								Let's get talking. Drop me a line
								<a href="mailto:hello@kishokanth.com" className={styles.hireCTA}>
									here
								</a>
							</p>
							<p>
								PS- I have a
								<a href="blogpost.com" className={styles.hireMeBlogPost}>
									blog post
								</a>
								on building great partnerships
							</p>
						</span>
					</span>
				</Col>
			</Row>
		</Col>
	);
}
