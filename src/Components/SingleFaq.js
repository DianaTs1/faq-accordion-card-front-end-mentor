import React, { useState } from 'react';
import icon from '../images/icon-arrow-down.svg';
import classes from './SingleFaq.module.css';

const SingleFaq = (props) => {
	const [ showAnswer, setShowAnswer ] = useState(false);

	const showAnswerHandler = () => {
		setShowAnswer(!showAnswer);
	};

	let questionStyle;
	let iconStyle;

	if (showAnswer) {
		questionStyle = {
			color: 'black',
			fontWeight: 700
		};
		iconStyle = {
			transform: 'rotate(180deg)'
		};
	}

	return (
		<div className={classes['single-faq']}>
			<div onClick={showAnswerHandler} className={classes['question-wrapper']}>
				<h3 style={questionStyle}>{props.question}</h3>
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
