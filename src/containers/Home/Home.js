import React from "react";
import styles from "./Home.module.css";
import SplashHeader from "../../components/SplashHeader/SplashHeader";

const Home = () => {
	// This container is mostly empty
	// While it could be merged with SplashHeader
	// I like to divide by concerns - logic vs. display
	return (
		<section className={styles.homeWrapper}>
			<SplashHeader />
		</section>
	);
};

export default Home;
