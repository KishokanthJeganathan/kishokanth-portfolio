import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styles from '../backgroundCta/backgroundCta.module.css';

export default function BackgroundCta({ children, height, fluid }) {
	return (
		<BackgroundImage style={{ height: `${height}`, width: '100%' }} fluid={fluid} className={styles.background}>
			{children}
		</BackgroundImage>
	);
}
