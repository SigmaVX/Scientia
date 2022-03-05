import React from "react";
import styles from "./ResultsRow.module.css";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const ResultsRow = (props) => {
	const { result, question } = props;
	const restultStyle = result === "+" ? styles.correct : styles.wrong;
	return (
		<div className={styles.wrapper}>
			<div className={`${styles.result} ${restultStyle}`}>{result}</div>
			<p className={styles.question}>{question}</p>
		</div>
	);
};

export default ResultsRow;
ResultsRow.propTypes = {
	question: PropTypes.string.isRequired,
	result: PropTypes.string.isRequired
};
