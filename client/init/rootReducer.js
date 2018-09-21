// Core
import { combineReducers } from 'redux';

//Reducers
import { productsReducer as products } from '../bus/products/reducer';
import { productReducer as product } from '../bus/product/reducer';

export const rootReducer = combineReducers({
    products,
    product,
});
