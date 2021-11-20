/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ image }) => {
	return (
		<div className="four wide column">
			<Link to={`details/${image.id}`}>
				<div className="ui link cards">
					<div className="card">
						<div className="image">
							<img
								src={image.urls.regular}
								alt={image.description}
								ref={image.imageRef}
								// style={{ height: 300 }}
							/>
						</div>
						{/* <div className="content">
						<div className="description">{image.alt_description}</div>
					</div> */}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ImageCard;
