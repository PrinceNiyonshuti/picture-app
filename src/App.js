/** @format */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/details/:id" element={<Details />} />
			</Routes>
		</div>
	);
};

export default App;
