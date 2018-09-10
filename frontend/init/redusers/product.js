import { SERVER_FLAG_TO_FALSE, FETCH_PRODUCT, IS_FETCHING_PRODUCT } from '../types';

const product = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:

            return action.payload;

        case SERVER_FLAG_TO_FALSE:

            return { ...state, isServer: false };

        case IS_FETCHING_PRODUCT:

            return action.payload;

        default :
            return state;
    }
};

export default product;
