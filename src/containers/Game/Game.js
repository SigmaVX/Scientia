import React, { useState, useEffect, useContext } from "react";
import Grid from "@material-ui/core/Grid";
import QuizBox from "../../components/QuizBox/QuizBox";
import Button from "../../components/UI/Button/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import styles from "./Game.module.css";
import { ScoreContext } from "../../context/ScoreContext";
import { useHttpClient } from "../../hooks/httpHook";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Game = () => {
	const { isLoading, sendRequest } = useHttpClient();
	const [errorText, setErrorText] = useState("");
	const scoreData = useContext(ScoreContext);
	const { count, questions, updateState, score } = scoreData;
	const currentQ = questions.length === 0 ? "Loading Questions" : questions[count - 1].question;
	const currentCategory = questions.length === 0 ? "Loading Category" : questions[count - 1].category;
	const history = useHistory();

	useEffect(() => {
		getQuestionsHandler();
		// eslint-disable-next-line
	}, []);

	const closeHandler = () => {
		setErrorText("");
		getQuestionsHandler();
	};

	const getQuestionsHandler = async () => {
		if (isLoading) {
			return;
		}
		try {
			const resData = await sendRequest("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean", "GET");
			let qList = questionMapper(resData.results);
			if (qList.length === 0) {
				throw new Error("Error: No Game Information in GET request.");
			} else {
				updateState({ questions: qList });
			}
		} catch (err) {
			if (err) {
				setErrorText("Error: Unable to load game information. Please close this modal to try again.");
			}
		}
	};

	const questionMapper = (rawQs) => {
		if (rawQs.length === 0) {
			return [];
		}

		const cleanString = (htmlStr) => {
			htmlStr = htmlStr.replace(/&lt;/g, "<");
			htmlStr = htmlStr.replace(/&gt;/g, ">");
			htmlStr = htmlStr.replace(/&quot;/g, '"');
			htmlStr = htmlStr.replace(/&#39;/g, "'");
			htmlStr = htmlStr.replace(/&#039;/g, "'");
			htmlStr = htmlStr.replace(/&amp;/g, "&");
			return htmlStr;
		};

		const qList = rawQs.map((q) => {
			return {
				category: q.category,
				question: cleanString(q.question),
				answer: q.correct_answer.toLowerCase()
			};
		});
		return qList;
	};

	const answerHandler = (answer) => {
		let correctAnswer = questions[count - 1].answer;
		let currentScore = score;
		let currentQuestions = questions;
		let newCount = count + 1;
		if (answer === correctAnswer) {
			currentQuestions[count - 1].result = "+";
			currentScore++;
		} else {
			currentQuestions[count - 1].result = "-";
		}
		updateState({
			score: currentScore,
			count: newCount,
			questions: currentQuestions
		});
		if (newCount === 11) {
			history.push("/results");
		}
	};

	return (
		<div className={styles.gameWrapper}>
			<Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
				<Grid item sm={12}>
					<h1 className="srText">Quiz Game Page</h1>
					<h2 className={styles.header}>{currentCategory}</h2>
				</Grid>
				<Grid item sm={12} md={6}>
					<QuizBox question={currentQ} isLoading={isLoading} />
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
								<Button id="true-button" size="big" width="200px" onClick={() => answerHandler("true")}>
									True
								</Button>
							</Grid>
							<Grid item sm={12}>
								<Button id="false-button" size="big" width="200px" inverse onClick={() => answerHandler("false")}>
									False
								</Button>
							</Grid>
						</div>
					</Grid>
				</Grid>
			</Grid>
			<div className="srText" id="error-modal-helper-text">
				Error Modal For Trivia Game
			</div>
			<Dialog onClose={closeHandler} aria-labelledby="error-modal-helper-text" open={errorText.length > 0}>
				<div className={styles.modalWrapper}>
					<DialogTitle id="error-title">Game Error</DialogTitle>
					<p>{errorText}</p>
					<Button id="close-error-button" alt onClick={closeHandler}>
						Close and Reload
					</Button>
				</div>
			</Dialog>
		</div>
	);
};

export default Game;
