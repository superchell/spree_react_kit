//Core
import { Map, fromJS } from 'immutable';

// Types
import { types } from './types';

const initialState = Map();

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT: {
            return fromJS(action.payload);
        }

        case types.GET_PRODUCT_SERVER: {
            return fromJS(action.payload);
        }

        default:
            return state;
    }
};
