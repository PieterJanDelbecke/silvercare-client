// import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
	return (
		<>
			<Link to="/">HOME</Link>
			<div>MainPage</div>
			<Link to="/resident/add"> Add Resident</Link>
		</>
	);
};

export default MainPage;
