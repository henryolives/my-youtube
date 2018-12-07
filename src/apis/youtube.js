import axios from 'axios';
const API_KEY = 'AIzaSyB6ZS26R2VGTYhg4HxfgvDw0mbpuVnuyHw';
 export default axios.create({
 	baseURL: 'https://www.googleapis.com/youtube/v3',
 	params: {
 		part: 'snippet',
 		maxResults: 5,
 		key: API_KEY
 	}
 })