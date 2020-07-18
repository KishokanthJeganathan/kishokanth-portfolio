import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/global/layout/Layout';
import IntroText from '../components/home/introText/IntroText';
import { Row } from 'react-bootstrap';
import Portfolio from '../components/home/portfolio/Portfolio';
import HireMe from '../components/home/hireMeCTA/HireMe';
import BlogPosts from '../components/home/blogsPosts/BlogPosts';
import NewsletterForm from '../components/home/newsletterForm/NewsletterForm';
import SEO from '../components/global/seo';

export default function index() {
	return (
		<Layout>
			<SEO
				title="Home"
				description="Welcome to my portfolio where I showcase my web development work and write article with tips on front-end development"
				image="https://i.ibb.co/T4nfB1c/Landing-page-image.jpg"
			/>
			<Row>
				<IntroText />
				<Portfolio />
				<HireMe />
				<BlogPosts />
				<NewsletterForm />
			</Row>
		</Layout>
	);
}
