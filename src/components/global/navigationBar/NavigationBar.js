import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../navigationBar/navigationBar.module.css';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Links from '../../../constants/Links';
import { v4 as uuidv4 } from 'uuid';

const query = graphql`
	query {
		allContentfulProfile {
			nodes {
				name
				picture {
					fluid {
						...GatsbyContentfulFluid
					}
				}
				tittle
			}
		}
	}
`;

export default function NavigationBar() {
	const data = useStaticQuery(query);
	const { name, tittle, picture } = data.allContentfulProfile.nodes[0];
	return (
		<Navbar
			collapseOnSelect
			sticky="top"
			expand="md"
			className={styles.NavigationBar}
			style={{ backgroundColor: 'white' }}
		>
			<Link to="/">
				<Navbar.Brand>
					<div className={styles.authorDetails}>
						<img src={picture.fluid.src} className={styles.img} alt="head shot of Kishokanth" />
						<div>
							<p className={styles.name}>{name}</p>
							<p className={styles.title}>{tittle}</p>
						</div>
					</div>
				</Navbar.Brand>
			</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					{Links.map((link) => (
						<Link className={styles.link} to={link.path} key={uuidv4()}>
							{link.text}
						</Link>
					))}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
