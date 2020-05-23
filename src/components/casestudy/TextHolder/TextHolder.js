import React from 'react';
import { Col } from 'react-bootstrap';

export default function TextHolder({ xs, sm, md, lg, h2, p }) {
	return (
		<Col xs={xs} sm={sm} md={md} lg={lg}>
			<h2>{h2}</h2>
			<p>{p}</p>
		</Col>
	);
}
