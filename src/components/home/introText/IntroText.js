import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../introText/introText.module.css';
import globalstyles from '../../global/global.module.css';

export default function IntroText() {
	return (
		<section>
			<Col xs={11} sm={9} className={styles.introText}>
				<h1 className={globalstyles.h1}>
					Hi, I'm Kishokanth
					<span role="img" aria-label="waving hand emoji" className={styles.emoji}>
						👋
					</span>
				</h1>
				<p className={globalstyles.p}>
					A Front-end Developer who truly believes in the power of JavaScript and their power in making every
					website a web-app and every web-app a website.
				</p>
				<p className={globalstyles.p1}>
					<span className={styles.intro}>Got an idea in mind?</span>
					<a href="mailto:hello@kishokanth.com" className={styles.introTextCTA}>
						Let's talk!
					</a>
				</p>
			</Col>
		</section>
	);
}
