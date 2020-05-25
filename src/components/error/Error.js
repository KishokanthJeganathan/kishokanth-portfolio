import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../error/error.module.css';
import Links from '../../constants/Links';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

export default function Error() {
	return (
		<Col className={styles.error}>
			<h1>404</h1>
			<p>
				Hmmmm, you appear to have hopped onto a page that I haven't created (yet{' '}
				<span role="img" aria-label="wink emoji">
					😉
				</span>)
			</p>
			Here are some links that might help you find what yu are looking for
			<div className={styles.links}>
				{Links.map((link) => (
					<Link className={styles.link} to={link.path} key={uuidv4()}>
						{link.text}
					</Link>
				))}
			</div>
		</Col>
	);
}
