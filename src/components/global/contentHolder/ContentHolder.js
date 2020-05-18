import React from 'react';
import { Col } from 'react-bootstrap';
import style from '../../global/contentHolder/contentHolder.module.css';

export default function ContentHolder({ xs, sm, md, lg, nameOfProject }) {
	return (
		<Col xs={xs} sm={sm} md={md} lg={lg} className={style.contentHolder}>
			<p>{nameOfProject}</p>
		</Col>
	);
}
