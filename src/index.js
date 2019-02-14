import React from 'react';
import ReactDOM from 'react-dom';
import AppWrapper from './AppWrapper';
import {HashRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'babel-polyfill';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'font-awesome/css/font-awesome.css';
import 'primereact/resources/primereact.min.css';

ReactDOM.render(
	<HashRouter>
		<AppWrapper></AppWrapper>
	</HashRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
