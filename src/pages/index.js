import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from '../components/global/layout/Layout';
import IntroText from '../components/home/introText/IntroText';
import { Row } from 'react-bootstrap';
import Portfolio from '../components/home/portfolio/Portfolio';

export default function index() {
	return (
		<Layout>
			<Row>
				<IntroText />
				<Portfolio />
			</Row>
		</Layout>
	);
}
