import React from 'react';
import Layout from '../components/global/layout/Layout';
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import BlogPost from '../components/global/blogPost/BlogPost';
import { Row } from 'react-bootstrap';
import PageTittle from '../components/global/pageTittle/PageTittle';
import NewsletterForm from '../components/home/newsletterForm/NewsletterForm';
import SEO from '../components/global/seo';

const query = graphql`
	{
		allContentfulMyBlog(sort: { order: DESC, fields: published }) {
			nodes {
				slug
				nameOfProject
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
			}
		}
		contentfulSectionTittles(sectionName: { eq: "blog" }) {
			subtittle
			tittle
		}
		contentfulMetas(tittle: { eq: "Blog" }) {
			metaImageLink
			tittle
			description
		}
	}
`;
export default function Blog() {
	const data = useStaticQuery(query);
	const tittleData = data.contentfulSectionTittles;
	const { tittle, subtittle } = tittleData;
	const blogPosts = data.allContentfulMyBlog.nodes;

	return (
		<Layout>
			<SEO
				title="Blog"
				description={data.contentfulMetas.description}
				image={data.contentfulMetas.metaImageLink}
			/>
			<PageTittle tittle={`${tittle} ✍️`} subtittle={`${subtittle}`} />
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
				<NewsletterForm />
			</Row>
		</Layout>
	);
}
