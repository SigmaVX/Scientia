import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
	const { size, inverse, alt, danger, to, href, exact, type, onClick, disabled, id, width } = props;
	let buttonClasses = `button button--${size || "default"} ${inverse && "button--inverse"} ${alt && "button--alt"} ${danger && "button--danger"}`;
	if (href) {
		return (
			<a id={id} className={buttonClasses} href={href}>
				{props.children}
			</a>
		);
	}
	if (to) {
		return (
			<Link id={id} to={to} exact={exact} className={buttonClasses}>
				{props.children}
			</Link>
		);
	}
	return (
		<button className={buttonClasses} type={type} onClick={onClick} disabled={disabled} id={id} style={width && { width: width }}>
			{props.children}
		</button>
	);
};

export default Button;
Button.propTypes = {
	size: PropTypes.string,
	alt: PropTypes.bool,
	inverse: PropTypes.bool,
	danger: PropTypes.bool,
	to: PropTypes.string,
	href: PropTypes.string,
	exact: PropTypes.bool,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	id: PropTypes.string.isRequired,
	width: PropTypes.string,
	onClick: function (props, propName) {
		if (props["to"] === false && props["href"] === true && (props[propName] === undefined || typeof props[propName] != "function")) {
			return new Error("onClick function is required");
		}
	}
};
