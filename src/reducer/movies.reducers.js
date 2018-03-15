import * as types from '../Utils/actionTypes';
import initialState from '../reducer/initialState';

export default function(state = initialState.movies, action){
    console.log(state, 'fetch')
    switch (action.type){
        
        case types.RETRIEVE_POPULAR_MOVIES_SUCCESS:
            return {
                ...state,
                PopularMovies: action.type
            };

        case types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS:
        return {
            ...state,
            nowPlayingMovies: action.nowPlayingMovies
        };

        case types.RETRIEVE_MOVIES_GENRES_SUCCESS:
        return {
            ...state,
            genres: action.genres
        };

        case types.RETRIEVE_MOVIES_LIST_SUCCESS:
        return {
            ...state,
            list: action.list
        };

        case types.RETRIEVE_MOVIE_DETAILS_SUCCESS:
        return {
            ...state,
            details: action.details
        };

        case types.RETRIEVE_MOVIES_SEARCH_RESULT_SUCCESS:
        return {
            ...state,
            searchResults: action.searchResults
        };
        default:
            return state;
    }
}