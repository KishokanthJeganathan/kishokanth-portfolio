import React from 'react';
import Tittle from '../../global/Tittle/Tittle';
import { graphql, useStaticQuery } from 'gatsby';
import { Col, Row } from 'react-bootstrap';
import styles from '../hireMeCTA/hireMe.module.css';
import globalstyles from '../../global/global.module.css';

const query = graphql`
	{
		allContentfulSectionTittles {
			nodes {
				tittle
				subtittle
			}
		}
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
	}
`;

export default function HireMe() {
	const data = useStaticQuery(query);
	const info = data.allContentfulSectionTittles.nodes[2];
	const { subtittle, tittle } = info;
	const CTA = data.allContentfulCta.nodes[0].text.internal.content;

	return (
		<section>
			<Row className={styles.hireMe}>
				<Tittle tittle={`${tittle} 💻`} subtittle={`${subtittle}`} />
				<Col xs={12} sm={10}>
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
				</Col>
			</Row>
		</section>
	);
}
