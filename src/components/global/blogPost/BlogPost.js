import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styles from '../../global/blogPost/blogPost.module.css';
import globalstyles from '../../global/global.module.css';

export default function BlogPost({ xs, sm, md, lg, nameOfProject, src, intro, slug }) {
	return (
		<Col xs={xs} sm={sm} md={md} lg={lg} className={styles.blogPost}>
			<Link to={`/blog/${slug}`} className={styles.readMore}>
				<Img fluid={src} />
			</Link>

			<div className={styles.content}>
				<h3 className={globalstyles.h3}> {nameOfProject}</h3>
				<p className={globalstyles.p2}>
					<span className={styles.intro}>{intro}</span>
				</p>
				<Link to={`/blog/${slug}`} className={styles.readMore}>
					Read post
				</Link>
			</div>
		</Col>
	);
}
