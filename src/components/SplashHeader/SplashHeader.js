import React, { useEffect, useRef } from "react";
import LineBreak from "../UI/LineBreak/LineBreak";
import styles from "./SplashHeader.module.css";
import {APP_TITLE} from "../../util/appConstants";

const SplashHeader = (props) => {
	const windowSize = window.innerWidth;
	const wrapperDiv = useRef(null);
	const imageOptions = ["https://picsum.photos/id/1025/200/300", "https://picsum.photos/id/1016/200/300", "https://picsum.photos/id/1002/200/300"];

	useEffect(() => {
		dropPics();
	}, []);

	const randomInRange = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	function dropPics() {
		let amount = 10;
		let body = wrapperDiv.current;
		let i = 0;
		while (i < amount) {
			let drop = document.createElement("img");
			let imgWrap = document.createElement("div");
			let size = randomInRange(30, 55);
			let posX = Math.floor(Math.random() * windowSize);
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
			drop.style.width = size + "px";
			drop.style.height = size + "px";
			drop.src = pickImg;
			imgWrap.appendChild(drop);
			body.appendChild(imgWrap);
			i++;
		}
	}

	return (
		<div className={styles.splashWrapper} ref={wrapperDiv}>
			<h1 className={styles.headerText}>SCIENTIA</h1>
			<LineBreak width={20} color={"#ff4382"} />
			<h2 className={styles.subText}>{APP_TITLE}</h2>
		</div>
	);
};

export default SplashHeader;
