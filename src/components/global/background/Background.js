import React from 'react';
import BackgroundImage from 'gatsby-background-image';

export default function Background(props) {
	return (
		<BackgroundImage
			xs={props.xs}
			sm={props.sm}
			md={props.md}
			lg={props.lg}
			fluid={props.src}
			style={{ height: `${props.height}`, width: `${props.width}` }}
		>
			{props.children}
		</BackgroundImage>
	);
}
