# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.


### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot



### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library




```js
<div className={classes['faq-wrapper']}>
				<h1>FAQ</h1>
				<SingleFaq question={Data.faq1.question} answer={Data.faq1.answer} />
				<SingleFaq question={Data.faq2.question} answer={Data.faq2.answer} />
				<SingleFaq question={Data.faq3.question} answer={Data.faq3.answer} />
				<SingleFaq question={Data.faq4.question} answer={Data.faq4.answer} />
				<SingleFaq question={Data.faq5.question} answer={Data.faq5.answer} />
</div>
```

```js
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
}
```
