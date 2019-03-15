/* eslint-env browser */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

import '../css/style.css';

const store = createStore(
	todoApp,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root')
// );

const app = document.getElementById('app');
ReactDOM.render(<Provider store={store}><App /></Provider>, app);
