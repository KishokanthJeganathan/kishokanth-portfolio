import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from '../components/global/layout/Layout';
import IntroText from '../components/home/introText/IntroText';
import { Row } from 'react-bootstrap';
import Portfolio from '../components/home/portfolio/Portfolio';
import HireMe from '../components/home/hireMeCTA/HireMe';
import BlogPosts from '../components/home/blogsPosts/BlogPosts';

export default function index() {
	return (
		<Layout>
			<Row>
				<IntroText />
				<Portfolio />
				<HireMe />
				<BlogPosts />
			</Row>
		</Layout>
	);
}
