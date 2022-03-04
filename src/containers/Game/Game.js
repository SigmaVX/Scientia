import React, { useContext } from "react";
import styles from "./Game.module.css";
import Grid from "@material-ui/core/Grid";
import { ScoreContext } from "../../context/ScoreContext";
import QuizBox from "../../components/QuizBox/QuizBox";
import Button from "../../components/UI/Button/Button";

// add api call
//  mapp api call
//  build quiz box and buttons
//  build handler for answering Q

const Game = () => {
	const scoreData = useContext(ScoreContext);
	const { count, questions } = scoreData;
	console.log(questions[count]);

	return (
		<div className={styles.gameWrapper}>
			<Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" rowSpacing={2}>
				<Grid item sm={12}>
					<h1 className="srText">Quiz Game Page</h1>
					<h2 className={styles.header}>From API Category</h2>
				</Grid>
				<Grid item sm={12} md={6}>
					<QuizBox question={questions[count - 1]} />
				</Grid>
				<Grid item sm={12} md={6}>
					<Grid container spacing={4} alignItems="stretch" direction="column">
						<div className={styles.buttonsWrapper}>
							<Grid item sm={12}>
								<p>
									{count} of {questions.length}
								</p>
							</Grid>

							<Grid item sm={12}>
								<Button size="big" width="200px">
									True
								</Button>
							</Grid>
							<Grid item sm={12}>
								<Button size="big" width="200px" inverse>
									False
								</Button>
							</Grid>
						</div>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Game;
