import React from 'react';
import { render } from 'react-dom';

// CSS
import css from './styles/style.styl';

// components
import App from './components/app';


// import react router deps

import { Provider } from 'react-redux';
import store from './store';



render(
	//<Provider store={createStoreWithMiddleware(reducers)}>
	<Provider store={store}>
		<App />
	</Provider> ,document.getElementById('root')
);
