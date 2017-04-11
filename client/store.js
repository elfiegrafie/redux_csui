import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import { createLogger } from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';


// import root reducer
import rootReducer from './reducers/index';

// imports datas
//import posts from './data/bench';

//const posts = axios.get('http://192.168.0.139:8002/post/all');


//create an object for the default data
// const initialState = {
// 	posts: posts
// };

// create the middleware action

// const myLogger = (store) => (next) => (action) => {
// 	console.log(' myLogger action : ', action);
// 	switch (action.type) {
// 		case 'GET_POSTS_DATA':
// 			axios.get('http://192.168.0.139:8002/post/all')
// 				.then((response) => {
// 					console.log('response');
// 					console.log(response);
// 					dispatch({
// 						type: 'GET_TODO_DATA_RECEIVED',
// 						response
// 					});
// 				});
// 		// next({
// 		// 	type: 'GET_TODO_DATA_RECEIVED',
// 		// 	response
// 		// })
// 		break
// 	}
// }

const middleware =  applyMiddleware(createLogger(), thunk);

// create store
const store = createStore(rootReducer, {}, middleware );
//const store = createStore(rootReducer, defaultState);

//store.dispatch({type: 'GET_POSTS_DATA'})
store.dispatch((dispatch) => {
	axios.get('http://192.168.0.139:8002/post/all')
	.then((response) => {
		dispatch({
			type: 'GET_TODO_DATA_RECEIVED',
			response
		});
	});
})

// exports
export default store;