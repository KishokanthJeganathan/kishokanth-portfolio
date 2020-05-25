import React from 'react';
import Layout from '../components/global/layout/Layout';
import Error from '../components/error/Error';
import SEO from '../components/global/seo';

export default function errorPage() {
	return (
		<Layout>
			<SEO
				title="404"
				description="This page does not seem to exist. Try visiting the links you see on the device please"
				image="https://i.ibb.co/GQ3G3Kp/404-page.jpg"
			/>
			<Error />
		</Layout>
	);
}
