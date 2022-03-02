import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = (props) => {
	const { size, inverse, danger, to, href, exact, type, onClick, disabled, id, width } = props;
	if (href) {
		return (
			<a className={`button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`} href={href}>
				{props.children}
			</a>
		);
	}
	if (to) {
		return (
			<Link to={to} exact={exact} className={`button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`}>
				{props.children}
			</Link>
		);
	}
	return (
		<button
			className={`button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
			id={id}
			style={width && { width: width }}
		>
			{props.children}
		</button>
	);
};

export default Button;
