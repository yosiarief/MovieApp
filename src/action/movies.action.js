import axios from 'axios';
import * as types from '../Utils/actionTypes';
import {apiBaseUrl, apiKey} from '../Utils/api';

// export function retrievePopularMoviesSuccess(res) {
// 	return {
// 		type: types.RETRIEVE_POPULAR_MOVIES_SUCCESS,
// 		popularMovies: res.data
// 	};
// }

export default function retrievePopularMovies() {
	return function (dispatch) {
		return axios.get(`${apiBaseUrl}/movie/popular?api_key=${apiKey}&page=1`)
		.then(res => {
			dispatch({ type: types.RETRIEVE_POPULAR_MOVIES_SUCCESS, payload: res.data});
		})
		.catch(error => {
			console.log('Popular', error); //eslint-disable-line
		});
	};
}