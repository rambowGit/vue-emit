import axios from "axios";


export const getPosts = () => {
	
	const params = new URLSearchParams;
	params.append("_limit", 10);
	
	return axios({
		method: "get",
		url: "https://jsonplaceholder.typicode.com/posts",
		params: params,
		headers: {
			// "MY-X-TOKEN": "test123",
		}
	});
	
};