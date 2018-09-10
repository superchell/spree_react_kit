// Core
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Instruments
import redusers from '../redusers';
import Routes from '../Router/Routes';
import Catcher from "../components/Catcher";
import { StaticRouter } from 'react-router-dom';

export default class ClientApp extends Component {
    render () {
        const { location } = this.props;
        const initialState =  { ...this.props };

        delete initialState.location;

        const store = createStore(
            redusers,
            initialState
        );

        return (
            <Catcher>
                <Provider store = { store }>
                    <StaticRouter context = { {} } location = { location }>
                        <Routes />
                    </StaticRouter>
                </Provider>
            </Catcher>
        );
    }
}
