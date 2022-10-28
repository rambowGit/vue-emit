import axios from "axios";


// установка токена в заголовки request
export function setHttpHeadereToken() {
	
	try {
		axios.defaults.headers = {
			"MY-X-TOKEN": "test123"
		}; 
	} catch(e) {
		throw "Error catched: " + e;
	}
}