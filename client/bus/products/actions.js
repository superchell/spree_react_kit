// Types
import { types } from './types';

//Async
export const getProductsAsync = () => {
    return {
        type: types.GET_PRODUCTS_ASYNC,
    };
};

export const getProductsFilterAsync = (filter) => {
    return {
        type:    types.GET_PRODUCTS_FILTER_ASYNC,
        payload: filter,
    };
};

//Sync
export const getProdyctsFilter = (products) => {
    return {
        type:    types.GET_PRODUCTS_FILTER,
        payload: products,
    };
};

//Server
export const getProdyctsServer = (products) => ({
    type:    types.GET_PRODUCTS_SERVER,
    payload: products,
});
