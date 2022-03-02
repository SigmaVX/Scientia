import React from "react";
import styles from "./Results.module.css";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';

const Results = (props) => {
	return (
		<div className={styles.resultsWrapper}>
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

export default Results;