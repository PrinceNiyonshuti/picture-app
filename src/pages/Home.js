/** @format */

import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import Unsplash from "../api/Unsplash";
import Pagination from "../components/Pagination";

function Home() {
	const [images, setImages] = useState();
	const [totalPhotos, setTotalPhotos] = useState(0);
	const [perPage, setPerPage] = useState(30);
	const [page, setPage] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	const onSearchSubmit = async (term, page) => {
		const response = await Unsplash.get("search/photos", {
			params: {
				query: term,
				page,
				per_page: perPage,
			},
		});
		setImages(response.data.results);
		setTotalPhotos(parseInt(response.headers["x-total"]));
		setCurrentPage(page);
	};

	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			<SearchBar onSearchSubmit={onSearchSubmit} />
			{images && <ImageList images={images} />}
		</div>
	);
}

export default Home;
