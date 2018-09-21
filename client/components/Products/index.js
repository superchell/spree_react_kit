//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Instrumetns
import Link from 'next/link';
import { getProductsAsync, getProductsFilterAsync } from '../../bus/products/actions';
import { fromJS } from 'immutable';

const mapState = (state) => {
    return {
        products: fromJS(state.products),
    };
};


export default
@connect(
    mapState,
    { getProductsAsync, getProductsFilterAsync }
)
class Products extends Component {

    componentDidMount () {
        // const { isServer } = this.props;
        //
        // if (!isServer) {
        //     this.props.getProductsAsync();
        // }
    }
    _getProductsFilterAsync = (event, num) => {
        event.preventDefault();

        this.props.getProductsFilterAsync(num);
    };

    render () {
        const { products } = this.props;

        return (
            <div>
                <h2>Products</h2>
                <ul>
                    <li><a
                        href = { `javascript:void` }
                        onClick = { (e) => {
                            this._getProductsFilterAsync(e, 6);
                        } }>Filter1</a></li>
                    <li><a
                        href = { `javascript:void` }
                        onClick = { (e) => {
                            this._getProductsFilterAsync(e, 11);
                        } }>Filter2</a></li>
                    <li><a
                        href = { `javascript:void` }
                        onClick = { (e) => {
                            this._getProductsFilterAsync(e, 4);
                        } }>Filter3</a></li>
                </ul>
                <ul>
                    { products.map((product, index) => (
                        <li key = { `productList${index}` }>
                            <Link
                                as = { `/product/${product.get('slug')}` }
                                href = { `/product?slug=${product.get('slug')}` }>
                                <a>{product.get('name')}</a>
                            </Link>
                            <p>
                                <img alt = '' src = { product.getIn(['master', 'images', 0, 'small_url']) } />
                            </p>
                        </li>)
                    )}
                </ul>
            </div>

        );
    }
}
