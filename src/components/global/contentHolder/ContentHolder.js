import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../../global/contentHolder/contentHolder.module.css';
import globalstyles from '../../global/global.module.css';

export default function ContentHolder({ xs, sm, md, lg, nameOfProject, src, intro, slug }) {
	return (
		<Col xs={xs} sm={sm} md={md} lg={lg} className={styles.contentHolder}>
			<Img fluid={src} />
			<div className={styles.content}>
				<h3 className={globalstyles.h3}> {nameOfProject}</h3>
				<p className={globalstyles.p2}>
					<span className={styles.intro}>{intro}</span>
				</p>
				<Link to={`/portfolio/${slug}`} className={styles.readMore}>
					Read casestudy
				</Link>
			</div>
		</Col>
	);
}
