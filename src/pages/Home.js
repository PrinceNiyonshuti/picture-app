/** @format */

import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import Unsplash from "../api/Unsplash";

function Home() {
	const [images, setImages] = useState();

	const onSearchSubmit = async (term) => {
		const response = await Unsplash.get("search/photos?page=5&per_page=30&", {
			params: {
				query: term,
			},
		});
		console.log(response);
		setImages(response.data.results);
	};
	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			<SearchBar onSearchSubmit={onSearchSubmit} />
			{images && <ImageList images={images} />}
		</div>
	);
}

export default Home;
