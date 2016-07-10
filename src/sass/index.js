import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';
import Main from "./components/Main";


const store = configureStore();

import "./sass/style.scss";

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>

            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
