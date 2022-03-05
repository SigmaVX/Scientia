import React, { useContext } from "react";
import styles from "./Results.module.css";
import Grid from "@material-ui/core/Grid";
import Button from "../../components/UI/Button/Button";
import ResultsRow from "../../components/ResultsRow/ResultsRow";
import { ScoreContext } from "../../context/ScoreContext";

const Results = (props) => {
	const scoreData = useContext(ScoreContext);
	const { count, questions, updateState, score } = scoreData;
	return (
		<div className={styles.resultsWrapper}>
			<Grid container spacing={3} direction="column" justifyContent="center" alignItems="center">
				<h1 className="srText">Resutls Page</h1>
				<Grid item sm={12}>
					<h2>You Scored</h2>
					<div className={styles.score}>
						{score}/{count - 1}
					</div>
				</Grid>
				<Grid item sm={12}>
					{questions.map((q, index) => (
						<ResultsRow key={index} question={q.question} result={q.result} />
					))}
				</Grid>
				<Grid item sm={12}>
					<Button to="/game">Play Again?</Button>
				</Grid>
			</Grid>
		</div>
	);
};

export default Results;
