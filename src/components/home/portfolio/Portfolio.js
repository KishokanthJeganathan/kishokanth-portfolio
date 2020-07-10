import React from 'react';
import Tittle from '../../global/Tittle/Tittle';
import { Col, Row } from 'react-bootstrap';
import ContentHolder from '../../global/contentHolder/ContentHolder';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import styles from '../portfolio/portfolio.module.css';
import globalstyles from '../../global/global.module.css';

const query = graphql`
	{
		allContentfulMyPortfolio(filter: { featureOnHomepage: { eq: true } }, sort: { fields: order, order: ASC }) {
			nodes {
				featureOnHomepage
				nameOfProject
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
			}
		}
		contentfulSectionTittles(sectionName: { eq: "portfolio" }) {
			subtittle
			tittle
		}
	}
`;

export default function Portfolio() {
	const data = useStaticQuery(query);
	const singleProject = data.allContentfulMyPortfolio.nodes;
	const { subtittle, tittle } = data.contentfulSectionTittles;

	return (
		<section>
			<Tittle tittle={`${tittle} 🙌`} subtittle={`${subtittle}`} />
			<Col>
				<Row className={styles.portfolio}>
					{singleProject.map((project) => (
						<ContentHolder
							xs="12"
							md="6"
							key={uuidv4()}
							nameOfProject={project.nameOfProject}
							src={project.headerimage.fluid}
							intro={project.projectIntro.internal.content}
							slug={project.slug}
						/>
					))}
				</Row>
			</Col>
			<Col>
				<Link className={styles.link} to="portfolio">
					<span className={globalstyles.p1}>See More Projects</span>
				</Link>
			</Col>
		</section>
	);
}
