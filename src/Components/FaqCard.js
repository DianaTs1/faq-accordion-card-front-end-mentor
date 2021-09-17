import React from 'react';
import Faq from './Faq';
import classes from './FaqCard.module.css';

const FaqCard = () => {
	return (
		<main className={classes.card}>
			<Faq />
		</main>
	);
};

export default FaqCard;
