import React from 'react';
import { Col } from 'react-bootstrap';
import Img from 'gatsby-image';
import styles from '../imageHolder/imageHolder.module.css';

export default function ImageHolder({ xs, sm, md, lg, src, alt }) {
	return (
		<Col xs={xs} sm={sm} md={md} lg={lg} className={styles.imageHolder}>
			<Img fluid={src} alt={alt} />
		</Col>
	);
}
