import React from 'react';
import { Col } from 'react-bootstrap';
import styles from '../TextHolder/textHolder.module.css';
import globalstyles from '../../global/global.module.css';

export default function TextHolder({ xs, sm, md, lg, h2, p, h1color, pcolor }) {
	return (
		<Col xs={xs} sm={sm} md={md} lg={lg} className={styles.textHolder}>
			<h2 style={{ color: `${h1color}` }}>{h2}</h2>
			<p style={{ color: `${pcolor}` }} className={globalstyles.p3}>
				{p}
			</p>
		</Col>
	);
}
