import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from '../components/Products';

export default class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Products } path = '/' />
            </Switch>
        );
    }
}
