import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";

import Styles from './style.scss';
import { START_FETCH_PRODUCTS } from '../../types';

import Spiner from '../Spiner';


class Products extends Component {

    componentDidMount () {
        const { actions } = this.props;

        actions.fetchProducts();
    }

    render () {
        const { products } = this.props;

        return (
            <div className = 'prdoduct-list'>
                <h1 className = { Styles.header }>Products</h1>
                <Spiner>
                    <ul className = { Styles["products-list"] }>
                        {
                            products.constructor !== Object ?
                                products.map((product, index) => (
                                    <li className = { Styles["products-list-item"] } key = { `product-${index}` }>
                                        <h2>{product.name}</h2>
                                        <div>
                                            {
                                                product.master ? (
                                                    <img
                                                        alt = { product.master.images[0].alt }
                                                        src = { product.master.images[0].small_url }
                                                    />
                                                ) : null
                                            }
                                        </div>
                                        <Link to = { `products/${product.slug}` } >Read More</Link>
                                    </li>
                                ))
                                : null
                        }
                    </ul>
                </Spiner>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            fetchProducts () {
                dispatch({ type: START_FETCH_PRODUCTS });
            },
        },
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Products));
