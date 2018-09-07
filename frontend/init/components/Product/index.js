import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Catcher from "../Catcher";

import Styles from './style.scss';
import { fetchProduct } from '../../actions';

class Product extends Component {

    componentDidMount () {
        const { actions, product } = this.props;
        const { slug } = this.props.match.params;

        if (!product.isFetched) {
            actions.fetchProduct(slug);
        }

    }

    render () {
        const { product } = this.props;

        return (
            <Catcher>
                <div className = 'product'>
                    {
                        product.data ? (
                            <h2>{ product.data.name }</h2>
                        ) : null
                    }
                </div>
            </Catcher>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            fetchProduct: bindActionCreators(fetchProduct, dispatch),
        },
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Product));
