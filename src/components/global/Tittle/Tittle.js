import React from 'react';
import { Col } from 'react-bootstrap';
import globalstyles from '../../global/global.module.css';

export default function Tittle({ tittle, subtittle }) {
	return (
		<Col xs={11} sm={12}>
			<h2 className={globalstyles.h2}>{tittle}</h2>
			<p className={globalstyles.p1}>{subtittle}</p>
		</Col>
	);
}
