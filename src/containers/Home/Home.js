import React from "react";
import styles from "./Home.module.css";
import PropTypes from "prop-types";
import SplashHeader from "../../components/SplashHeader/SplashHeader";

const Home = (props) => {
	return (
		<div className={styles.homeWrapper}>
			<SplashHeader />
		</div>
	);
};

export default Home;
