import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import styles from '../socialSharing/socialSharing.module.css';

export default function SocialSharing() {
	let url = typeof window !== 'undefined' && window.location.href;
	return (
		<Col>
			<Row className={styles.shareButtonHolder}>
				<Col xs={3} sm={2}>
					<a
						href={`https://facebook.com/sharer/sharer.php?u=${url}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Share on Facebook"
					>
						<FaFacebookSquare style={{ fontSize: '2rem', color: '#3b5998' }} />
					</a>
				</Col>
				<Col xs={3} sm={2}>
					<a
						class="resp-sharing-button__link"
						href={`https://twitter.com/intent/tweet/?text=${url}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="share on Twitter"
					>
						<FaTwitterSquare style={{ fontSize: '2rem', color: '#1DA1F2' }} />
					</a>
				</Col>
				<Col xs={3} sm={2}>
					<a
						class="resp-sharing-button__link"
						href={` https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="share on LinkedIn"
					>
						<FaLinkedin style={{ fontSize: '2rem', color: ' #0072b1' }} />
					</a>
				</Col>
			</Row>
		</Col>
	);
}
