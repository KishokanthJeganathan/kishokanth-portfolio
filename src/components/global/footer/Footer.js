import React from 'react';
import styles from '../footer/footer.module.css';
import socialMedia from '../../../constants/Socialmedia';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col } from 'react-bootstrap';
import { Link, graphql, useStaticQuery } from 'gatsby';

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
							<img src={picture.fluid.src} className={styles.img} />
							<div>
								<p className={styles.name}>{name}</p>
								<p className={styles.title}>{tittle}</p>
							</div>
						</div>
					</Col>
					<Col xs={12} md={3} className={styles.footerSocialMedia}>
						{socialMedia.map((platform) => (
							<a className={styles.socialMedia} href={platform.url} key={uuidv4()}>
								{platform.icon}
							</a>
						))}
					</Col>
					<Col xs={12} md={5} className={styles.footerCTA}>
						<p className={styles.p}>
							Enthusiastic about building something great? Let's get talking at
							<a href="mailto:hello@kishokanth.com" className={styles.emailAddress}>
								hello@kishokanth.com
							</a>
						</p>
					</Col>
				</Row>
			</Col>
		</footer>
	);
}

{
	/* <Row>
				<Col xs={12}>
					<p className={styles.CTA}>
						As enthusiastic as I am for the start of a new project? Reach out to me on on my social media!
					</p>
				</Col>
				<Col className={styles.footerSocialMedia}>
					{socialMedia.map((platform) => (
						<a className={styles.socialMedia} href={platform.url} key={uuidv4()}>
							{platform.icon}
						</a>
					))}
				</Col>
				<Col xs={12} className={styles.email}>
					or
					<a href="mailto:hello@kishokanth.com" className={styles.emailAddress}>
						hello@kishokanth.com
					</a>
				</Col>
			</Row> */
}
