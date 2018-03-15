import {Platform} from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
}from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger'; 

import rootReducer from './reducer/movies.reducers'

const middleware = applyMiddleware(thunk, promise, logger);

const Store = createStore(
    rootReducer,
    compose(
        middleware
    )
);

export default Store;