import React from 'react';
import styles from '../footer/footer.module.css';
import socialMedia from '../../../constants/Socialmedia';

import { Row, Col } from 'react-bootstrap';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<Row>
				<Col xs={12}>
					<p className={styles.CTA}>
						As enthusiastic as I am for the start of a new project? Reach out to me on on my social media!
					</p>
				</Col>
				<Col className={styles.footerSocialMedia}>
					{socialMedia.map((platform) => (
						<a className={styles.socialMedia} href={platform.url}>
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
			</Row>
		</footer>
	);
}
