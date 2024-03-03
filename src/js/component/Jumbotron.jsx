import React from "react";
import PropTypes from "prop-types";


export const Jumbotron = props => {
	return (
		
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<a
				className="btn btn-primary btn-lg"
				target="_blank"
				rel="noreferrer"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
};
Jumbotron.defaultProps = {
	title: "React and the Earth Elements",
	description: "React se utiliza generalmente para construir la interfaz de usuario (frontend) de las aplicaciones web. Ofrece una rápida renderización de las páginas y un mayor rendimiento. React puede utilizarse para construir cualquier producto que se ejecute en la web.",
	buttonLabel: "Click to find out more",
	buttonURL: "https://reactjs.org/"
};

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};

export default Jumbotron;


 