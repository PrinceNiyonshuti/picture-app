/** @format */

import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import Unsplash from "../api/Unsplash";
import Loader from "../components/Loader";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
	const [images, setImages] = useState([]);

	const onSearchSubmit = async (term, page) => {
		const response = await Unsplash.get("search/photos", {
			params: {
				query: term,
				page,
				per_page: 30,
			},
		});
		setImages(response.data.results);
	};

	useEffect(() => {
		fetchImages();
	});

	const fetchImages = () => {
		const apiRoot = "https://api.unsplash.com";
		const accessKey = "CZl0NjZ8Wkzj4DCy8TuO7bYe5_EZfZN9ascpEgOZCeE";

		axios
			.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=5`)
			.then((res) => setImages([...images, ...res.data]));
	};

	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			<SearchBar onSearchSubmit={onSearchSubmit} />
			<InfiniteScroll
				dataLength={images.length}
				next={fetchImages}
				hasMore={true}
				loader={<Loader />}>
				{images && <ImageList images={images} />}
			</InfiniteScroll>

			{/* {images && <ImageList images={images} />} */}
		</div>
	);
}

export default Home;
