import React from 'react';
import { Col } from 'react-bootstrap';
import style from '../../global/contentHolder/contentHolder.module.css';

export default function ContentHolder({ xs, sm, md, lg }) {
	return (
		<article>
			<Col xs={xs} sm={sm} md={md} lg={lg} className={style.contentHolder}>
				<img src="https://www.kindpng.com/picc/m/9-94755_mobile-apps-devlopment-mobile-app-clipart-png-transparent.png" />
			</Col>
		</article>
	);
}
