import React, { useState } from 'react';
import icon from '../images/icon-arrow-down.svg';
import classes from './SingleFaq.module.css';

const SingleFaq = (props) => {
	const [ showAnswer, setShowAnswer ] = useState(false);

	const showAnswerHandler = () => {
		setShowAnswer(!showAnswer);
	};

	let quetionStyle;
	let iconStyle;

	if (showAnswer) {
		quetionStyle = {
			color: 'black',
			fontWeight: 700
		};
		console.log(quetionStyle);

		iconStyle = {
			transform: 'rotate(180deg)'
		};
	}

	return (
		<div className={classes['single-faq']}>
			<div onClick={showAnswerHandler} className={classes['question-wrapper']}>
				<h3 style={quetionStyle}>{props.question}</h3>
				<img
					className={classes.icon}
					style={iconStyle}
					src={icon}
					alt="errow down icon fo a quetion"
				/>
			</div>
			{showAnswer && <p>{props.answer}</p>}
		</div>
	);
};

export default SingleFaq;
