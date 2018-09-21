//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

//Actions
import { getProductAsync } from '../../bus/product/actions';

//Instrumetns
import { fromJS } from 'immutable';

const mapState = (state) => {
    return {
        product: fromJS(state.product),
    };
};

export default
@connect(
    mapState,
    { getProductAsync }
)
class Product extends Component {
    componentDidMount () {

        // const { isServer, query } = this.props;
        // const { slug } = this.props.query;
        //
        // if (!isServer) {
        //     this.props.getProductAsync(slug);
        // }
    }

    render () {
        const { product } = this.props;

        return (
            <div>
                <h2>{product.get('name')}</h2>

                <div className = 'image_profuct'>
                    <img alt = '' src = { product.getIn(['master', 'images', 0,  'large_url']) } />
                </div>


                <Link href = '/'>
                    <a>Home</a>
                </Link>
            </div>

        );
    }
}
