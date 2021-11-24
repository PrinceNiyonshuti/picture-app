/** @format */

import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import Unsplash from "../api/Unsplash";
import Loader from "../components/Loader";

function Home() {
	const [images, setImages] = useState();
	const [perPage, setPerPage] = useState(30);
	const onSearchSubmit = async (term, page) => {
		const response = await Unsplash.get("search/photos", {
			params: {
				query: term,
				page,
				per_page: perPage,
			},
		});
		setImages(response.data.results);
	};

	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			<SearchBar onSearchSubmit={onSearchSubmit} />
			<Loader />
			{images && <ImageList images={images} />}
		</div>
	);
}

export default Home;
