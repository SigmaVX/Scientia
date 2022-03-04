import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
	const { size, inverse, danger, to, href, exact, type, onClick, disabled, id, width } = props;
	if (href) {
		return (
			<a id={id} className={`button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`} href={href}>
				{props.children}
			</a>
		);
	}
	if (to) {
		return (
			<Link id={id} to={to} exact={exact} className={`button button--${size || "default"} ${inverse && "button--inverse"} ${danger && "button--danger"}`}>
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
Button.propTypes = {
	size: PropTypes.string,
	inverse: PropTypes.bool,
	danger: PropTypes.bool,
	to: PropTypes.string,
	href: PropTypes.string,
	exact: PropTypes.bool,
	type: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
	id: PropTypes.string.isRequired,
	width: PropTypes.string
};
