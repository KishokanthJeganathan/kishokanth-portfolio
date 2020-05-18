import React from 'react';
import { Col } from 'react-bootstrap';

export default function Tittle({ tittle, subtittle }) {
	return (
		<Col xs={11} sm={8}>
			<h2>{tittle}</h2>
			<p>{subtittle}</p>
		</Col>
	);
}
