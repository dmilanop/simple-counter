import React from "react";
import PropTypes from "prop-types";
import "bootstrap";

//create your first component
const Home = props => {
	return (
		<>
			<div
				className="container"
				style={{
					display: "flex",
					justifyContent: "end",
					marginTop: "1rem"
				}}>
				<div
					className="number"
					style={{
						fontFamily: "monospace",
						fontSize: "5rem",
						background: "black",
						color: "white",
						display: "flex",
						justifyContent: "end"
					}}>
					<div
						style={{
							marginRight: "2rem",
							marginTop: "0.5rem",
							marginLeft: "2rem"
						}}>
						<i className="far fa-clock"></i>
					</div>
					{props.numberSix % 10} : {props.numberFive % 10}{" "}
					{props.numberFour % 10} : {props.numberThree % 10}{" "}
					{props.numberTwo % 10} : {props.numberOne % 10}
				</div>
			</div>
		</>
	);
};

Home.propTypes = {
	numberOne: PropTypes.number,
	numberTwo: PropTypes.number,
	numberThree: PropTypes.number,
	numberFour: PropTypes.number,
	numberFive: PropTypes.number,
	numberSix: PropTypes.number
};

export default Home;
