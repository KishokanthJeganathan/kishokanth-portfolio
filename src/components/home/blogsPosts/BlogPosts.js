import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Row } from 'react-bootstrap';
import Tittle from '../../global/Tittle/Tittle';
import styles from '../blogsPosts/blogPosts.module.css';
import { v4 as uuidv4 } from 'uuid';
import BlogPost from '../../global/blogPost/BlogPost';

const query = graphql`
	{
		allContentfulMyBlog(filter: { featureOnHomepage: { eq: true } }, sort: { fields: order, order: ASC }) {
			nodes {
				featureOnHomepage
				order
				slug
				projectIntro {
					internal {
						content
					}
				}
				headerimage {
					fluid {
						...GatsbyContentfulFluid
					}
				}
				nameOfProject
			}
		}
		allContentfulSectionTittles {
			nodes {
				subtittle
				tittle
			}
		}
	}
`;

export default function BlogPosts() {
	const data = useStaticQuery(query);
	const SectionInfo = data.allContentfulSectionTittles.nodes[1];
	const { subtittle, tittle } = SectionInfo;
	const blogPosts = data.allContentfulMyBlog.nodes;
	console.log(blogPosts);
	return (
		<section className={styles.blog}>
			<Tittle tittle={`${tittle} ✍️`} subtittle={`${subtittle}`} />
			<Row>
				{blogPosts.map((project) => (
					<BlogPost
						xs="12"
						sm="6"
						md="4"
						key={uuidv4()}
						nameOfProject={project.nameOfProject}
						src={project.headerimage.fluid}
						intro={project.projectIntro.internal.content}
						slug={project.slug}
					/>
				))}
			</Row>
		</section>
	);
}
