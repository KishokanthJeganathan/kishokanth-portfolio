import React from 'react';
import { Col } from 'react-bootstrap';
import globalstyles from '../../global/global.module.css';
import styles from '../Tittle/tittle.module.css';

export default function Tittle({ tittle, subtittle, padding }) {
	return (
		<Col xs={12} style={{ padding: `${padding}` }}>
			<h2 className={globalstyles.h2}>{tittle}</h2>
			<p className={globalstyles.p1}>
				<span className={styles.subtittle}>{subtittle}</span>
			</p>
		</Col>
	);
}
