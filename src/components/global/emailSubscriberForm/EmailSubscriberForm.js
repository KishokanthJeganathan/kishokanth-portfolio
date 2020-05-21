import React, { useState } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import globalstyles from '../../global/global.module.css';
import styles from '../emailSubscriberForm/emailSubscriberForm.module.css';
import { Col } from 'react-bootstrap';

export default function EmailSubscriberForm({ CTA, bordercolor, textAlign }) {
	const [ email, setEmail ] = useState('');
	const [ checkbox, setCheckbox ] = useState(false);
	const [ submissionMessege, setSubmissionMessege ] = useState('');
	const [ submissionSuccesful, setSubmissionSuccesful ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (checkbox === true) {
			addToMailchimp(email)
				.then((data) => {
					setSubmissionMessege(
						<p>{`${data.msg === 'Thank you for subscribing!'
							? 'Thank you for subscribing! 🎉'
							: data.msg}`}</p>
					);
					setEmail('');
					setCheckbox(!checkbox);
					setSubmissionSuccesful(data.msg === 'Thank you for subscribing!' ? true : false);
				})
				.catch((errors) => {
					setSubmissionMessege(
						<p>Uhoh, I cant register this email due to some reason. Maybe there is a typo? 🤔</p>
					);
					setEmail('');
					setCheckbox(!checkbox);
				});
		} else {
			setSubmissionMessege(<p className={styles.checkboxReminder}>Please agree to share your data 😊</p>);
		}
	};
	return (
		<Col xs={12} style={{ textAlign: `${textAlign}` }}>
			{submissionMessege}
			{!submissionSuccesful && (
				<span>
					<form onSubmit={handleSubmit}>
						<label htmlFor="email address" className={styles.label}>
							<p className={globalstyles.p2}>{CTA}</p>
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className={styles.input}
							style={{ borderBottom: `${bordercolor}` }}
						/>
					</form>

					<span className={styles.checkbox} style={{ justifyContent: `${textAlign}` }}>
						<input
							type="checkbox"
							onChange={() => setCheckbox(!checkbox)}
							name="checkbox"
							value={checkbox}
							checked={checkbox}
						/>
						<label htmlFor="checkbox for GDPR compliance" className={styles.label}>
							<p className={styles.disclaimer}>
								By subscribing to our newsletter, you grant us permission to send you further
								correspondence. For more information, please visit our privacy policy.
							</p>
						</label>
					</span>

					<button onClick={handleSubmit} className={styles.button}>
						Sign Up
					</button>
				</span>
			)}
		</Col>
	);
}
