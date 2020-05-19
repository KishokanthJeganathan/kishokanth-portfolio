import React from 'react';
import Tittle from '../../global/Tittle/Tittle';
import { Col, Row } from 'react-bootstrap';
import ContentHolder from '../../global/contentHolder/ContentHolder';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import styles from '../portfolio/portfolio.module.css';
import globalstyles from '../../global/global.module.css';
import { BsArrowRight } from 'react-icons/Bs';

const query = graphql`
	{
		allContentfulMyPortfolio(filter: { featureOnHomepage: { eq: true } }, sort: { fields: order, order: ASC }) {
			nodes {
				slug
				order
				nameOfProject
				featureOnHomepage
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
		contentfulSectionTittles {
			tittle
			subtittle
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
				<Link className={styles.link}>
					<span className={globalstyles.p1}>
						See More Projects <BsArrowRight />
					</span>
				</Link>
			</Col>
		</section>
	);
}
