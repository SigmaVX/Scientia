import React from "react";
import styles from "./DataList.module.css";
import PropTypes from "prop-types";

const DataList = (props) => {
	const { title, text } = props;
	return (
		<dl className={styles.wrapper}>
			<dt className={styles.title}>{title}:</dt>
			<dd className={styles.text}>{text}</dd>
		</dl>
	);
};

export default DataList;

DataList.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};
