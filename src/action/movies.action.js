import axios from 'axios';
import * as types from '../Utils/actionTypes';
import {apiBaseUrl, apiKey} from '../Utils/api';

export function retrievePopularMoviesSuccess(res) {
	return {
		type: types.RETRIEVE_POPULAR_MOVIES_SUCCESS,
		popularMovies: res.data
	};
}

export default function retrievePopularMovies(page) {
	return function (dispatch) {
		return axios.get(`${apiBaseUrl}/movie/popular?api_key=${apiKey}&page=${page}`)
		.then(res => {
			dispatch(retrievePopularMoviesSuccess(res));
		})
		.catch(error => {
			console.log('Popular', error); //eslint-disable-line
		});
	};
}