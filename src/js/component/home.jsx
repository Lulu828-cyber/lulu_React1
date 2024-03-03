import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";

//include images into your bundle

//create your first component

//Navbar
const NavBar = props => {
	const items = props.items.map(item => (
	  <li class="nav-item">
		<a class="nav-link" href={item.url}>
		  {item.label}
		</a>
	  </li>
	));
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <a class="navbar-brand" href="#">
			{/* here I pass the logo url to the navbar image */}
			<img src={props.logo} />
		  </a>
		  {/* here I pass the array of LIs into the UL */}
		  <ul class="navbar-nav mr-auto">{items}</ul>
		</nav>
	  );
	};
	let menu = [
		{ label: "Home", url: "/home", label2:"contact" },
		{ label: "Contact Us", url: "/contact-us" }
	  ];

	 
	  

////...............
/* class Navbar extends React.Component{
	render(){
	return (<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar</span>
  </div>
</nav>)
	}
} */
	//div.jobotron Con boton
	
	//Div container//
	//Cards con foto,text y botton//
	function MyCard(){
		return (
			<div className="card mx-auto" style={{width: "18rem"}}> 
			  <img className="card-img-top" src="https://images.nationalgeographic.org/image/upload/t_RL2_search_thumb/v1638889927/EducationHub/photos/pebble-beach.jpg" alt="Card image cap" /> 
			  <div className="card-bodystyle text-center">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam molestiae repellendus velit soluta obcaecati. Soluta dolor cupiditate sed incidunt corporis ex quaerat, laborum, similique, sit fugiat expedita quisquam cumque aut!.</p>
				<a href="#" className="btn btn-primary">Call action</a>
			  </div>
			</div>
		);
	}
	export default (MyCard)
//footer//





/* const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Hello Lucia!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
};

export default Home; */
