import React from 'react';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from 'react-share';
import { Col, Row } from 'react-bootstrap';
import styles from '../socialShare/socialShare.module.css';

export default function SocialShare({ xs, sm, md, url }) {
	return (
		<Col xs={xs} sm={sm} md={md}>
			<Row className={styles.row}>
				<Col xs={2}>
					<FacebookShareButton url={url}>
						<FacebookIcon size={32} round={true} />
					</FacebookShareButton>
				</Col>
				<Col xs={2}>
					<TwitterShareButton url={url}>
						<TwitterIcon size={32} round={true} />
					</TwitterShareButton>
				</Col>
				<Col xs={2}>
					<LinkedinShareButton url={url}>
						<LinkedinIcon size={32} round={true} />
					</LinkedinShareButton>
				</Col>
				<Col xs={12} className={styles.CTA}>
					<p className={styles.CTAText}>Like it? Share it 😊</p>
				</Col>
			</Row>
		</Col>
	);
}
