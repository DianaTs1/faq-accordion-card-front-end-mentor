import React from 'react';
import SingleFaq from './SingleFaq';
import classes from './Faq.module.css';
import illustration from '../images/illustration-woman-online-mobile.svg';
import pattern from '../images/bg-pattern-mobile.svg';
import { Data } from './Data';
const Fag = () => {
	return (
		<section className={classes.faq}>
			<div className={classes.illustrations}>
				<img className={classes.pattern} src={pattern} alt="drop shaddow" />
				<img
					className={classes.illustration}
					src={illustration}
					alt="illustraation of a girl looking at a big flat screen"
				/>
			</div>
			<div className={classes['faq-wrapper']}>
				<h1>FAQ</h1>
				<SingleFaq question={Data.faq1.question} answer={Data.faq1.answer} />
				<SingleFaq question={Data.faq2.question} answer={Data.faq2.answer} />
				<SingleFaq question={Data.faq3.question} answer={Data.faq3.answer} />
				<SingleFaq question={Data.faq4.question} answer={Data.faq4.answer} />
				<SingleFaq question={Data.faq5.question} answer={Data.faq5.answer} />
			</div>
		</section>
	);
};

export default Fag;
