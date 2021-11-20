/** @format */

import React from "react";

const ImageCard = ({ image }) => {
	return (
		<div className="four wide column">
			<div className="ui link cards">
				<div className="card">
					<div className="image">
						<img
							src={image.urls.regular}
							alt={image.description}
							ref={image.imageRef}
						/>
					</div>
					{/* <div className="content">
						<div className="description">{image.alt_description}</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default ImageCard;
