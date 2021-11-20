/** @format */

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
	const { id } = useParams();
	const [details, setDetails] = useState(null);

	useEffect(() => {
		fetch(
			`https://api.unsplash.com/photos/` +
				id +
				`?client_id=CZl0NjZ8Wkzj4DCy8TuO7bYe5_EZfZN9ascpEgOZCeE`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setDetails(data);
			});
		// eslint-disable-next-line
	}, []);
	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			{details ? (
				<div>
					<Link to="/">
						<i className="arrow left icon"></i> Go Back
					</Link>
					<div className="ui card " style={{ width: 500 }}>
						<div className="image">
							<img
								src={details.urls.full}
								alt={details.description}
							/>
						</div>
						<div className="content">
							<Link to="/">
								<p className="header left floated">{details.description}</p>
							</Link>
							<span className="right floated">
								<i className="heart filled like icon"></i>
								{details.likes} likes
							</span>
						</div>
						<div className="content">
							<div className="description">{details.alt_description}</div>
						</div>
					</div>
				</div>
			) : (
				<p>No data available</p>
			)}
		</div>
	);
}

export default Details;
