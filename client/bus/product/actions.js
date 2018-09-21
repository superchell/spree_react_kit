// Types
import { types } from './types';

//Async
export const getProductAsync = (slug) => {
    return {
        type:    types.GET_PRODUCT_ASYNC,
        payload: slug,
    };
};

//Sync
export const getProdyct = (product) => {
    return {
        type:    types.GET_PRODUCT,
        payload: product,
    };
};

//Server

export const getProdyctServer = (slug) => ({
    type:    types.GET_PRODUCT_SERVER,
    payload: slug,
});
