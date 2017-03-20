import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

// imports datas
import posts from './data/bench';

//create an object for the default data
const defaultState = {
	posts: posts
};

const middleWare = applyMiddleware();

// create store
const store = createStore(rootReducer, defaultState, middleWare);
//const store = createStore(rootReducer, defaultState);


// exports

export default store;