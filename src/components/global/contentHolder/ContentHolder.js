import React from 'react';
import { Col } from 'react-bootstrap';
import style from '../../global/contentHolder/contentHolder.module.css';
import Background from '../background/Background';
import { Link } from 'gatsby';

export default function ContentHolder({ xs, sm, md, lg, nameOfProject, src, intro, slug }) {
	return (
		<Col xs={xs} sm={sm} md={md} lg={lg} className={style.contentHolder}>
			<Background src={src} height="30vh" width="100%" />
			<h3>{nameOfProject}</h3>
			<p className={style.intro}>{intro}</p>
			<Link to={`/portfolio/${slug}`} className={style.readMore}>
				Read Casestudy
			</Link>
		</Col>
	);
}
