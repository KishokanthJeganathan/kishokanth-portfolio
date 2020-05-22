import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import Footer from '../footer/Footer';
import styles from '../layout/layout.module.css';

export default function Layout({ children }) {
	return (
		<Container className={styles.layout}>
			<NavigationBar />
			{children}
			<Footer />
		</Container>
	);
}
