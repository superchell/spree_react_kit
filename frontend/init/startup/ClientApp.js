// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Router from '../Router';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

//Instruments
import redusers from '../redusers';
import Routes from '../Router/Routes';

export default class ClientApp extends Component {
    render () {
        const initialState= { ...this.props };

        delete initialState.location;

        const history = createBrowserHistory();

        const store = createStore(
            connectRouter(history)(redusers),
            initialState,
            composeWithDevTools(
                applyMiddleware(
                    routerMiddleware(history),
                    thunk
                )
            )
        );

        return (
            <Provider store = { store }>
                <Router history = { history } >
                    <Routes />
                </Router>
            </Provider>
        );
    }
}
