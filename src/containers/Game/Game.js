import React, {useContext} from "react";
import styles from "./Game.module.css";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import { ScoreContext } from "../../context/ScoreContext";

const Game = (props) => {
	const scoreData = useContext(ScoreContext);
	
	return (
		<div className={styles.gameWrapper}>
				<Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
					<section className={styles.quizSection}>
								<Grid item sm={6} md={6} lg={4}>
									<div>
										Quiz Box
									</div>
								</Grid>
					</section>
				</Grid>
		</div>
	);
};

export default Game;