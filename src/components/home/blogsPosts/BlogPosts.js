import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import Tittle from '../../global/Tittle/Tittle';
import styles from '../blogsPosts/blogPosts.module.css';
import { v4 as uuidv4 } from 'uuid';
import BlogPost from '../../global/blogPost/BlogPost';
import globalstyles from '../../global/global.module.css';
import { FaLongArrowAltRight } from 'react-icons/Fa';

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
		contentfulSectionTittles(sectionName: { eq: "blog" }) {
			subtittle
			tittle
		}
	}
`;

export default function BlogPosts() {
	const data = useStaticQuery(query);
	const SectionInfo = data.contentfulSectionTittles;
	const { subtittle, tittle } = SectionInfo;
	const blogPosts = data.allContentfulMyBlog.nodes;

	return (
		<section className={styles.blog}>
			<Tittle tittle={`${tittle} ✍️`} subtittle={`${subtittle}`} />
			<Col>
				<Row>
					{blogPosts.map((project) => (
						<BlogPost
							xs="12"
							sm="6"
							lg="4"
							key={uuidv4()}
							nameOfProject={project.nameOfProject}
							src={project.headerimage.fluid}
							intro={project.projectIntro.internal.content}
							slug={project.slug}
						/>
					))}
					<Col>
						<Link className={styles.link}>
							<span className={globalstyles.p1}>
								See More Projects <FaLongArrowAltRight />
							</span>
						</Link>
					</Col>
				</Row>
			</Col>
		</section>
	);
}
