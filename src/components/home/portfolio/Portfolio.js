import React from 'react';
import Tittle from '../../global/Tittle/Tittle';
import { Col, Row } from 'react-bootstrap';
import ContentHolder from '../../global/contentHolder/ContentHolder';

export default function Portfolio() {
	return (
		<section>
			<Tittle
				tittle="My Portfolio 🙌"
				subtittle="Read about the products I’ve got the opportunity to work on or check out my Dribbble for more work."
			/>
			<Col>
				<Row>
					<ContentHolder xs="12" sm="4" />
				</Row>
			</Col>
		</section>
	);
}
