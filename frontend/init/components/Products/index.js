import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";

import Styles from './style.scss';

class Products extends Component {
    componentDidMount () {
        TweenMax.from('h1', 2, { opacity: 0, x: 50 });
    }

    render () {
        const { products } = this.props;

        return (
            <div className = 'prdoduct-list'>
                <h1 className = { Styles.header }>Products</h1>
                <ul className = { Styles["products-list"] }>
                    {
                        products.map((product, index) => (
                            <li className = { Styles["products-list-item"] } key = { `product-${index}` }>
                                <h2>{product.name}</h2>
                                <Link to = { `product/${product.slug}` } >Read More</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

        );
    }
}

export default withRouter(connect(
    (state) => ({
        products: state.products,
    }),
    (dispatch) => ({})
)(Products));
