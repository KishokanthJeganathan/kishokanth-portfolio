import React from 'react';
import styles from '../introText/introText.module.css';
import globalstyles from '../../global/global.module.css';
import { Col } from 'react-bootstrap';

export default function IntroText() {
	return (
		<section>
			<Col xs={11} sm={9} className={styles.introText}>
				<h1 className={globalstyles.h1}>Hi, I'm Kishokanth 👋</h1>
				<p className={globalstyles.p}>
					A Front-end Developer who truly believes in the power of JavaScript and their power in making every
					website a web-app and every web-app a website.
				</p>
				<p>
					Got an idea in mind?
					<a href="mailto:hello@kishokanth.com" className={styles.introTextCTA}>
						Let's talk!
					</a>
				</p>
			</Col>
		</section>
	);
}
