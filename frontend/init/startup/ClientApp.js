// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//Routing
import Router from '../Router';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import Routes from '../Router/Routes';

//Instruments
import redusers from '../redusers';
import Catcher from "../components/Catcher";

export default class ClientApp extends Component {
    render () {
        const initialState= { ...this.props };

        delete initialState.location;

        const history = createBrowserHistory();

        const store = createStore(
            connectRouter(history)(redusers),
            initialState,
            process.env.NODE_ENV === 'development'
                ? composeWithDevTools(
                    applyMiddleware(
                        routerMiddleware(history),
                        thunk
                    )
                )
                : applyMiddleware(
                    routerMiddleware(history),
                    thunk
                )
        );

        return (
            <Catcher>
                <Provider store = { store }>
                    <Router history = { history } >
                        <Routes />
                    </Router>
                </Provider>
            </Catcher>
        );
    }
}
