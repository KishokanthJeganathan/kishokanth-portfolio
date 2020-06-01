import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import styles from '../socialSharing/socialSharing.module.css';

export default function SocialSharing() {
	let url = typeof window !== 'undefined' && window.location.pathname;

	return (
		<Col>
			<Row className={styles.shareButtonHolder}>
				<Col xs={3} sm={2}>
					<a
						// href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//www.kishokanth.com${url}`}
						href="https://www.facebook.com/sharer/sharer.php?u=https%3A//www.kishokanth.com/blog/how-to-easily-deploy-a-react-app"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Share on Facebook"
					>
						<FaFacebookSquare style={{ fontSize: '2rem', color: '#3b5998' }} />
					</a>
				</Col>
				<Col xs={3} sm={2}>
					<a
						className="resp-sharing-button__link"
						// href={`https://twitter.com/intent/tweet?text=https%3A//www.kishokanth.com${url}`}
						href="https://twitter.com/intent/tweet?text=https%3A//www.kishokanth.com/blog/how-to-easily-deploy-a-react-app"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="share on Twitter"
					>
						<FaTwitterSquare style={{ fontSize: '2rem', color: '#1DA1F2' }} />
					</a>
				</Col>
				<Col xs={3} sm={2}>
					<a
						className="resp-sharing-button__link"
						// href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.kishokanth.com${url}&title=&summary=&source=`}
						href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.kishokanth.com/blog/how-to-easily-deploy-a-react-app&title=&summary=&source="
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
