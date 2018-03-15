import { combineReducers } from 'redux';
import movies from '../reducer/movies.reducers';

const rootReducer = combineReducers({
    movies
})

export default rootReducer;