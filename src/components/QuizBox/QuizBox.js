import React from "react";
import styles from "./QuizBox.module.css";
import PropTypes from "prop-types";

const QuizBox = (props) => {
	// Could have used Context But Wanted To Show Use of Props and PropTypes
	const { question, count } = props;
	return (
		<div className={styles.wrapper}>
			<div className={styles.box}>
				<h3>{question}</h3>
			</div>
		</div>
	);
};

export default QuizBox;

QuizBox.propTypes = {
	question: PropTypes.string.isRequired
};
