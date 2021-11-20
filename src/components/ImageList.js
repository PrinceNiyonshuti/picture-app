/** @format */

import React from "react";
import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
	return (
		<div className="ui grid">
			{images.map((image) => (
				<ImageCard key={image.id} image={image} />
			))}
		</div>
	);
};

export default ImageList;
