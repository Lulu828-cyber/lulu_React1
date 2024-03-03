import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component// funcion y return?//html-javascript??

//Navbar
//div.jobotron con boton
	
	//Div container//
	//Cards con foto,text y botton//
//footer...

function Home() {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-3 col-sm-2">
						<Card
							imageUrl="https://cdn.britannica.com/65/161665-050-C4B1FA75/Waves-North-Shore-Oahu-Hawaiian-Islands.jpg"
							cardTitle="Agua"
							cardDescription="El fuego como elemento vital suele asociarse al calor, al movimiento y a la energía. Muchas cosas en nuestro mundo dependen de la combustión, como los coches o la calefacción, y los mismos seres humanos dependemos para la vida del elemento fuego por antonomasia: el Sol, astro en permanente combustión."
							buttonLabel="Find Out More"
							/* buttonURL = "https://reactjs.org/" */ //no funciona//

						/>
					</div>
					<div className="col-xl-3 col-md-3 col-sm-2">
						<Card
							imageUrl="https://www.thoughtco.com/thmb/SKAfBk8mi7zBitbK72kVj2Rf9uE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/hand-with-burning-matchstick-453905709-5703d7365f9b581408ae9da0.jpg"
							cardTitle="Fuego"
							cardDescription="El fuego como elemento vital suele asociarse al calor, al movimiento y a la energía. Muchas cosas en nuestro mundo dependen de la combustión, como los coches o la calefacción, y los mismos seres humanos dependemos para la vida del elemento fuego por antonomasia: el Sol, astro en permanente combustión."							
							buttonLabel="Find Out More"
						/>
					</div>
					<div className="col-xl-3 col-md-3 col-sm-2">
						<Card
							imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqTp-3t6TcSPVgWVsycYlDmP8KjE1KWyImMbv77nvAHAXVoPxwQApYtSgzdlKyjqyl10&usqp=CAU"
							cardTitle="Aire"
							cardDescription="El aire es un elemento esencial para el desarrollo de la vida en la Tierra, sin él no podrían existir las plantas, los animales, ni los seres humanos. El aire: elemento de vida en la Tierra. El aire es una mezcla de gases que forman la atmósfera, es por ello que se encuentra en todas partes"
							buttonLabel="Find Out More"
						/>
					</div>
					<div className="col-xl-3 col-md-3 col-sm-2">
						<Card
							imageUrl="https://www.abc.net.au/reslib/201111/r861770_8270457.jpg"
							cardTitle="Tierra"
							cardDescription="El elemento tierra representa la materia sólida y la estructura del universo. Da forma al cuerpo humano y a toda la creación, su estructura es el conducto a través del cual los otros elementos fluyen. Todos los elementos nacen del éter y están contenidos dentro de la tierra"
							buttonLabel="Find Out More"
						/>
					</div>
				</div>
			</div>
			 <footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						--- Lu. ---
					</p>
				</div>
			</footer>
		</div>
	);
};

	export default Home;



/* /* import "bootstrap/dist/css/bootstrap.min.css"; ?? no entendi esto

//include images into your bundle

	
//footer no fui capaz de ponerlo en otro file dentro de componenete...//

 */