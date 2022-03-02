import React from "react";
import styles from "./LineBreak.module.css";

const LineBreak = (props) => {
	const { width, color } = props;
	const marginLeft = (100 - width) / 2;
	const lineColor = color ? color : "#cdcdcd";

	return (
		<div style={{ width: `${width}%`, marginLeft: `${marginLeft}%` }} className={styles.wrapper}>
			<hr style={{ backgroundColor: `${lineColor}` }} className={styles.break} />
		</div>
	);
};

export default LineBreak;
