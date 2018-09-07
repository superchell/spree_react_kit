import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from '../components/Products';
import Product from '../components/Product';

export default class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Products } path = '/' />
                <Route exact component = { Product } path = '/products/:slug' />
            </Switch>
        );
    }
}
