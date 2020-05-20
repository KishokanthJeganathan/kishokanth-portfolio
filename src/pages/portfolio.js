import React from 'react';
import Layout from '../components/global/layout/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import PageTittle from '../components/global/pageTittle/PageTittle';
import { Row } from 'react-bootstrap';
import BlogPost from '../components/global/blogPost/BlogPost';
import { v4 as uuidv4 } from 'uuid';
import HireMe from '../components/home/hireMeCTA/HireMe';

const query = graphql`
	query {
		allContentfulMyPortfolio {
			nodes {
				slug
				projectIntro {
					internal {
						content
					}
				}
				nameOfProject
				headerimage {
					fluid {
						...GatsbyContentfulFluid
					}
				}
			}
		}
		allContentfulSectionTittles {
			nodes {
				tittle
				subtittle
			}
		}
	}
`;

export default function Portfolio() {
	const data = useStaticQuery(query);
	const tittleData = data.allContentfulSectionTittles.nodes[2];
	const { tittle, subtittle } = tittleData;
	const projects = data.allContentfulMyPortfolio.nodes;
	return (
		<Layout>
			<PageTittle tittle={`${tittle} 🙌`} subtittle={`${subtittle}`} />
			<Row>
				{projects.map((project) => (
					<BlogPost
						xs="12"
						sm="6"
						key={uuidv4()}
						nameOfProject={project.nameOfProject}
						src={project.headerimage.fluid}
						intro={project.projectIntro.internal.content}
						slug={project.slug}
					/>
				))}
			</Row>
			<HireMe />
		</Layout>
	);
}
