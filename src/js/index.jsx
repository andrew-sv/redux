import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Application from './components/Application.jsx';
import { createStore } from 'redux';
import AppReducer from './reducers/AppReducer.jsx';

let appStore = createStore(AppReducer);

ReactDOM.render(
	<Provider store={appStore}>
		<Application />
	</Provider>,
	document.getElementById('app-container')
);