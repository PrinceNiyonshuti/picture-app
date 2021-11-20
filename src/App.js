/** @format */

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
	const onSearchSubmit = async (term) => {
		alert(term);
	};
	return (
		<div className="ui container" style={{ marginTop: "15px" }}>
			<SearchBar onSearchSubmit={onSearchSubmit} />
			<ImageList />
		</div>
	);
}

export default App;
