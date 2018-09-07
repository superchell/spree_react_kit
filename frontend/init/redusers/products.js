import { FETCH_PRODUCTS } from '../types';

const products = (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload;

        default :
            return state;
    }
};

export default products;
