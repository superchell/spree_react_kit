//Core
import React, { Component, Fragment } from 'react';

//Components
import { Product } from '../components';

//Instruments
import { api } from '../API';
import { getProdyctServer } from '../bus/product/actions';

export default class ProductPage extends Component {

    static async getInitialProps ({ reduxStore, req, query }) {
        const isServer = Boolean(req);
        const { slug } = query;

        const product = await api.products.getOne(slug);
        await reduxStore.dispatch(getProdyctServer(product));

        return { isServer, query };
    }

    render () {
        return (
            <Fragment>
                <h1>Product</h1>
                <Product {...this.props} />
            </Fragment>
        );
    }
}
