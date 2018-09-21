//Core
import React, { Component, Fragment } from 'react';
import { fromJs } from 'immutable';


//Components
import { Products } from '../components';

//Instruments
import { api } from '../API';
import { getProdyctsServer } from '../bus/products/actions';


export default class Index extends Component {

    static async getInitialProps ({ reduxStore, req }) {
        const isServer = Boolean(req);

        const products = await api.products.get();
        await reduxStore.dispatch(getProdyctsServer(products));

        return { isServer };
    }

    render () {
        return (
            <Fragment>
                <h1>Index</h1>
                <Products {...this.props} />
            </Fragment>
        );
    }
}
