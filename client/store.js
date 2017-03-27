import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';


// import root reducer
import rootReducer from './reducers/index';

// imports datas
import posts from './data/bench';


//create an object for the default data
const initialState = {
	posts: posts
};

// create the middleware action

// const myLogger = (store) => (next) => (action) => {
// 	console.log(' myLogger action : ', action);
// 	next(action);
// }

const middleware =  applyMiddleware(createLogger());

// create store
const store = createStore(rootReducer, initialState, middleware );
//const store = createStore(rootReducer, defaultState);


// exports

export default store;