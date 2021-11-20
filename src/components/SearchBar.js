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
					<p>Search Image</p>
					<input
						type="text"
						onChange={(e) => setTerm(e.target.value)}
						name="term"
						placeholder="Try like : Cars ,Car ,Dog ,Plane ..............."
					/>
				</div>
			</form>
		</div>
	);
}

export default SearchBar;
