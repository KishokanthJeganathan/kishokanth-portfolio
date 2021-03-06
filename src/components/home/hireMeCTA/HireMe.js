import React from 'react';
import Tittle from '../../global/Tittle/Tittle';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import styles from '../hireMeCTA/hireMe.module.css';
import globalstyles from '../../global/global.module.css';
import { Link } from 'gatsby';

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
								<Link to="/contact" className={styles.hireCTA}>
									here
								</Link>
							</p>
							<p>
								PS- I have a
								<a
									href="https://www.kishokanth.com/blog/what-is-a-great-front-end-project-partnership"
									className={styles.hireMeBlogPost}
								>
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
