import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const planet_id = params.planet_id;
	const people_id = params.people_id;
	const vehicles_id = params.vehicles_id;
	const type = (function() {
		if (typeof planet_id !== "undefined") {
			return "planet";
		} else if (typeof people_id !== "undefined") {
			return "people";
		} else if (typeof vehicles_id !== "undefined") {
			return "vehicles";
		}
		return null;
	})();

	console.log(type);
	return <div className="jumbotron" />;
};

Details.propTypes = {
	match: PropTypes.object
};
