import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './App';
import ScrollToTop from './ScrollToTop';
import { HashRouter } from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <ScrollToTop>
            <App></App>
        </ScrollToTop>
    </HashRouter>,
    document.getElementById('root')
);

//registerServiceWorker();
