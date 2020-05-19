import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Row } from 'react-bootstrap';
import Tittle from '../../global/Tittle/Tittle';
import styles from '../blogsPosts/blogPosts.module.css';

const query = graphql`
	{
		allContentfulSectionTittles {
			nodes {
				tittle
				subtittle
			}
		}
	}
`;

export default function BlogPosts() {
	const data = useStaticQuery(query);
	const info = data.allContentfulSectionTittles.nodes[1];
	const { subtittle, tittle } = info;
	return (
		<section className={styles.blog}>
			<Row>
				<Tittle tittle={`${tittle} ✍️`} subtittle={`${subtittle}`} />
			</Row>
		</section>
	);
}
