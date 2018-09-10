import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";

//Components
import Catcher from "../Catcher";
import Spiner from '../Spiner';
import Seo from '../Seo';

//Instrumetns
import Styles from './style.scss';
import { SERVER_FLAG_TO_FALSE, START_FETCH_PRODUCT } from '../../types';

class Product extends Component {

    componentDidMount () {
        const { actions, product, cleanProduct } = this.props;
        const { slug } = this.props.match.params;

        actions.cleanProduct();

        if (!product.isFetched) {
            actions.fetchProduct(slug);
        }
    }

    render () {
        const { product, spinner } = this.props;

        return (
            <Catcher>
                <Spiner>
                    <div>New</div>
                    {
                        product.data ? (
                            <div className = 'product'>
                                <Seo title = { product.data.name } />
                                <h2 className = { Styles.header }>{ product.data.name }</h2>
                            </div>
                        ) : null
                    }
                </Spiner>
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
            fetchProduct (slug) {
                dispatch({ type: START_FETCH_PRODUCT, payload: slug });
            },
            cleanProduct () {
                dispatch({ type: SERVER_FLAG_TO_FALSE });
            },
        },
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Product));
