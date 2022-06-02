import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dFpaEVy1Fn0hvEBs7UoiO8fLlyWMaxoIQw&usqp=CAU"/>
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
