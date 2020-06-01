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

	const displaySubmissionMessege = () => {
		if (submissionMessege === 'Thank you for subscribing!') {
			return 'Thank you for subscribing! 🎉';
		} else if (submissionMessege.includes('already')) {
			return 'You have subscribed to this newsletter already. Thank you once again 😊';
		} else {
			return submissionMessege;
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (checkbox === true) {
			addToMailchimp(email)
				.then((data) => {
					setSubmissionMessege(data.msg);
					setEmail('');
					setCheckbox(!checkbox);
					setSubmissionSuccesful(data.msg === 'Thank you for subscribing!' ? true : false);
				})
				.catch((errors) => {
					setSubmissionMessege(
						<p>
							Uhoh, I cant register this email due to some reason. Maybe there is a typo
							<span role="img" aria-label="thinking emoji">
								🤔
							</span>
						</p>
					);
					setEmail('');
					setCheckbox(!checkbox);
				});
		} else {
			setSubmissionMessege(
				<p className={styles.checkboxReminder}>
					Please agree to share your data{' '}
					<span role="img" aria-label="smiling emoji">
						😊
					</span>
				</p>
			);
		}
	};
	return (
		<Col xs={12} style={{ textAlign: `${textAlign}` }}>
			<p>{displaySubmissionMessege()}</p>
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
							id="checkbox for GDPR compliance"
						/>
						<label htmlFor="checkbox for GDPR compliance" className={styles.label}>
							<p className={styles.disclaimer}>
								By subscribing to my newsletter, you grant me permission to send you further
								correspondence. For more information, please visit my
								<a
									href="https://www.kishokanth.com/privacypolicy"
									target="_blank"
									rel="noopener noreferrer"
									className={styles.privacyPolicy}
								>
									privacy policy
								</a>.
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
