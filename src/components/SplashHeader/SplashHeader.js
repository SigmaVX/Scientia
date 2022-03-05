import React, { useEffect, useRef, useCallback } from "react";
import LineBreak from "../UI/LineBreak/LineBreak";
import styles from "./SplashHeader.module.css";
import { APP_TITLE, INSTRUCTIONS, INSTRUCTIONS_Q } from "../../util/appConstants";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const randomInRange = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const SplashHeader = () => {
	const windowSize = window.innerWidth;
	const wrapperDiv = useRef(null);
	const colorOptions = ["#fff", "#00ccff", "#d400d4"];
	const imageOptions = [
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`,
		`https://picsum.photos/id/${randomInRange(1031, 1075)}/60/60`
	];

	const dropPics = useCallback(() => {
		let body = wrapperDiv.current;
		let bodySize = body.offsetWidth;
		let amount = 10;
		if (windowSize > 900) {
			amount = 25;
		}
		let i = 0;
		while (i < amount) {
			let drop = document.createElement("img");
			let imgWrap = document.createElement("div");
			let size = randomInRange(30, 55);
			let posX = Math.floor(Math.random() * bodySize);
			let delay = Math.random() * -20;
			let duration = randomInRange(10, 15);
			let pickImg = imageOptions[randomInRange(0, imageOptions.length - 1)];
			imgWrap.className = styles.imageWrap;
			imgWrap.style.width = size + "px";
			imgWrap.style.height = size + "px";
			imgWrap.style.left = posX + "px";
			imgWrap.style.animationDelay = delay + "s";
			imgWrap.style.animationDuration = duration + "s";
			drop.className = styles.image;
			drop.style.border = `1px solid ${colorOptions[randomInRange(0, 2)]}`;
			drop.style.width = size + "px";
			drop.style.height = size + "px";
			drop.src = pickImg;
			imgWrap.appendChild(drop);
			body.appendChild(imgWrap);
			i++;
		}
	}, [windowSize]);

	useEffect(() => {
		dropPics();
	}, [dropPics]);

	return (
		<div className={styles.splashWrapper} ref={wrapperDiv}>
			<Grid container spacing={5} direction="column" justifyContent="center" alignItems="center">
				<Grid item xs={12}>
					<div className={styles.topSection}>
						<h1 className={styles.headerText}>SCIENTIA</h1>
						<LineBreak width={20} color={"#ff4382"} />
						<p className={styles.subText}>{APP_TITLE}</p>
					</div>
				</Grid>
				<Grid item xs={12}>
					<div className={styles.infoWrapper}>
						<p className={styles.infoText}>{INSTRUCTIONS}</p>
						<p className={styles.infoText}>{INSTRUCTIONS_Q}</p>
						<NavLink className={styles.navButton} to={"/game"}>
							BEGIN
						</NavLink>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default SplashHeader;
