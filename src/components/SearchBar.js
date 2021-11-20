/** @format */

import React, { useState } from "react";

function SearchBar({ onSearchSubmit }) {
	const [term, setTerm] = useState("");
	const onFormSubmit = (e) => {
		e.preventDefault();
		onSearchSubmit(term);
	};
	return (
		<div className="ui segment">
			<form className="ui form" onSubmit={onFormSubmit}>
				<div className="field">
					<label>Image search</label>
					<input
						type="text"
						onChange={(e) => setTerm(e.target.value)}
						name="term"
					/>
				</div>
			</form>
		</div>
	);
}

export default SearchBar;
