import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3"class="navbar">
			<Link to="/">
				<button className="getstarted">Get started</button>
			</Link>
			<div className="ml-auto">
				
					<button className="btn btn-primary">Log IN</button>
			
			</div>
		</nav>
	);
};
