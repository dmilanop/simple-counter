//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Home from "./component/Home.jsx";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

let counter = 0;

setInterval(() => {
	const one = Math.floor(counter / 1);
	const two = Math.floor(counter / 10);
	const three = Math.floor(counter / 100);
	const four = Math.floor(counter / 1000);
	const five = Math.floor(counter / 10000);
	const six = Math.floor(counter / 100000);
	counter++;
	ReactDOM.render(
		<Home
			numberOne={one}
			numberTwo={two}
			numberThree={three}
			numberFour={four}
			numberFive={five}
			numberSix={six}
		/>,
		document.querySelector("#app")
	);
}, 500);
