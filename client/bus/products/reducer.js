//Core
import { List, fromJS } from 'immutable';

// Types
import { types } from './types';

const initialState = List();

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS: {
            return fromJS(action.payload);
        }

        case types.GET_PRODUCTS_FILTER: {
            return fromJS(action.payload);
        }

        case types.GET_PRODUCTS_SERVER: {
            return fromJS(action.payload);
        }

        default:
            return state;
    }
};
