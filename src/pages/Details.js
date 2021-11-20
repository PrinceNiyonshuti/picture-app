/** @format */

import React from "react";
import { Link, useParams } from "react-router-dom";

function Details() {
    const { id } = useParams();
	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			<Link to="/">
				<i class="arrow left icon"></i> Go Back
			</Link>
			<div className="ui card">
				<div className="image">
					<img src="/images/avatar2/large/kristy.png" />
				</div>
				<div className="content">
					<a className="header">Kristy</a>
					<div className="meta">
						<span className="date">Joined in 2013</span>
					</div>
					<div className="description">
						Kristy is an art director living in New York.
					</div>
				</div>
				<div className="extra content">
					<a>
						<i className="user icon"></i>
						22 Friends
					</a>
				</div>
			</div>
		</div>
	);
}

export default Details;
