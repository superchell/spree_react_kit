// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//Middleware
import createSagaMiddleware from 'redux-saga';

//Actions
import rootSaga from '../actions/sagas.js';

//Routing
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import Routes from '../Router/Routes';

//Instruments
import redusers from '../redusers';
import Catcher from "../components/Catcher";
import { ConnectedRouter } from 'connected-react-router';

export default class ClientApp extends Component {
    render () {
        const initialState= { ...this.props };

        delete initialState.location;

        const history = createBrowserHistory();
        const sagaMiddleware = createSagaMiddleware();

        const store = createStore(
            connectRouter(history)(redusers),
            initialState,
            process.env.NODE_ENV === 'development'
                ? composeWithDevTools(
                    applyMiddleware(
                        routerMiddleware(history),
                        sagaMiddleware
                    )
                )
                : applyMiddleware(
                    routerMiddleware(history),
                    sagaMiddleware
                )
        );

        sagaMiddleware.run(rootSaga);

        return (
            <Catcher>
                <Provider store = { store }>
                    <ConnectedRouter history = { history }>
                        <Routes />
                    </ConnectedRouter>
                </Provider>
            </Catcher>
        );
    }
}
