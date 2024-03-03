import React from "react"; //Main React.js library
import PropType from "prop-types";

export const Card = props => {
	return (
		<div className="card h-100 mb-sm-4 mb-md-4 mb-lg-4">
			<img
				className="card-img-top img"
				src={props.imageUrl}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title text-center">{props.cardTitle}</h5>
				<p className="card-text text-center">{props.cardDescription}</p>
			</div>
			<div className="card-footer text-muted">
				<div className="text-center">
					<a
						href={props.buttonUrl}
						target="_blank"
						rel="noreferrer"
						className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};
 Card.propTypes = {
	imageUrl: PropType.string,
	cardTitle: PropType.string,
	cardDescription: PropType.string,
	buttonUrl: PropType.string,
	buttonLabel: PropType.string
}; 


/* import React from "react";

function Mycard(){
    return (
        <div className="Mycard mx-auto" style={{width: "18rem"}}> 
          <img className="Mycard-img-top" src="https://images.nationalgeographic.org/image/upload/t_RL2_search_thumb/v1638889927/EducationHub/photos/pebble-beach.jpg" alt="Mycard image cap" /> 
          <div className="Mycard-bodystyle text-center">
            <h5 className="Mycard-title">Mycard title</h5>
            <p className="Mycard-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam molestiae repellendus velit soluta obcaecati. Soluta dolor cupiditate sed incidunt corporis ex quaerat, laborum, similique, sit fugiat expedita quisquam cumque aut!.</p>
            <a href="#" className="btn btn-primary">Call action</a>
          </div>
        </div>
    );

}

export default Mycard; */

