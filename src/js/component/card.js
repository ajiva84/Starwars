import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.img} className="card-img-top" alt="..." />
			<h5 className="card-title">{props.title}</h5>
			<div className="card-body">
				<Link to={props.btnLink} className="btn btn-primary">
					{props.btwText}
				</Link>
			</div>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
	title: PropTypes.string,
	btnLink: PropTypes.string,
	btwText: PropTypes.string
};
