import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import Footer from '../footer/Footer';
import styles from '../layout/layout.module.css';

export const Layout = (props) => {
	return (
		<main>
			<Container className={styles.layout}>
				<NavigationBar />
				{props.children}
				{/* <Footer /> */}
			</Container>
		</main>
	);
};
