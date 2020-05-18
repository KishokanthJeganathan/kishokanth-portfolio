import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from '../navigationBar/navigationBar.module.css';
import { Link } from 'gatsby';
import Links from '../../../constants/Links';
import { v4 as uuidv4 } from 'uuid';

export default function NavigationBar() {
	return (
		<Navbar collapseOnSelect expand="md" className={styles.NavigationBar}>
			<Navbar.Brand href="#home">
				<div className={styles.authorDetails}>
					<img
						src="https://machohairstyles.com/wp-content/uploads/2016/06/Spruce-Gold-Locks.jpg"
						className={styles.img}
					/>
					<div>
						<p className={styles.name}>Kishokanth Jeganathan</p>
						<p className={styles.title}>Front-end Developer</p>
					</div>
				</div>
			</Navbar.Brand>
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
