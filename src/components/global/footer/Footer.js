import React from 'react';
import styles from '../footer/footer.module.css';
import socialMedia from '../../../constants/Socialmedia';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
	query {
		allContentfulProfile {
			nodes {
				name
				picture {
					fluid {
						...GatsbyContentfulFluid
					}
				}
				tittle
			}
		}
	}
`;

export default function Footer() {
	const data = useStaticQuery(query);
	const { name, tittle, picture } = data.allContentfulProfile.nodes[0];
	return (
		<footer className={styles.footer}>
			<Col className={styles.col}>
				<Row className={styles.row}>
					<Col xs={12} md={4} className={styles.profile}>
						<div className={styles.authorDetails}>
							<img src={picture.fluid.src} className={styles.img} alt="head shot of Kishokanth" />
							<div>
								<p className={styles.name}>{name}</p>
								<p className={styles.title}>{tittle}</p>
							</div>
						</div>
					</Col>
					<Col xs={12} md={4} className={styles.footerSocialMedia}>
						{socialMedia.map((platform) => (
							<a
								className={styles.socialMedia}
								href={platform.url}
								key={uuidv4()}
								target="_blank"
								rel="noopener noreferrer"
							>
								{platform.icon}
							</a>
						))}
					</Col>
					<Col xs={12} md={4} className={styles.footerCTA}>
						<p className={styles.p}>
							Enthusiastic about building something great? Let's get talking at
							<a href="mailto:hello@kishokanth.com" className={styles.emailAddress}>
								hello@kishokanth.com
							</a>
						</p>
					</Col>
					<Col xs={12} className={styles.copyright}>
						{`©Kishokanth - ${new Date().getFullYear()}`}
					</Col>
				</Row>
			</Col>
		</footer>
	);
}
