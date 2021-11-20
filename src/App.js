/** @format */
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
	const [images, setImages] = useState();

	const onSearchSubmit = async (term) => {
		alert(term);
	};
	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			<SearchBar onSearchSubmit={onSearchSubmit} />
			<ImageList />
		</div>
	);
}

export default App;
