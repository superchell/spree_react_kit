import { FETCH_PRODUCT, IS_FETCHING_PRODUCT } from '../types';

const product = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:

            return action.payload;

        case IS_FETCHING_PRODUCT:

            return action.payload;

        default :
            return state;
    }
};

export default product;
