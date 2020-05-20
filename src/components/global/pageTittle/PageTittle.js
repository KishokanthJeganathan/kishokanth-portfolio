import React from 'react';
import Tittle from '../Tittle/Tittle';
import styles from '../../global/pageTittle/pageTittle.module.css';

export default function PageTittle({ tittle, subtittle }) {
	return (
		<div className={styles.tittle}>
			<Tittle tittle={tittle} subtittle={subtittle} />
		</div>
	);
}
