/** @format */

import axios from "axios";

//configuration for axios request
export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID CZl0NjZ8Wkzj4DCy8TuO7bYe5_EZfZN9ascpEgOZCeE",
	},
});
