import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import ReduxThunk from 'redux-thunk';

 //모듈들 불러오기 
import base from './modules/base';
// configure middleware
const middlewares = [promiseMiddleware(), ReduxThunk];

// apply redux-logger when DEBUG mode
if(process.env.NODE_ENV === 'development'){
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
}
const createStroeWithMiddleware = applyMiddleware(...middlewares)(createStore);

/* combine the reducers */
const reducer = combineReducers({
    base
});
const configureStore = (initialState) => createStroeWithMiddleware(reducer, initialState);

export default configureStore;