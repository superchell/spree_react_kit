import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import spinner from './spinner';

export default combineReducers({
    products,
    product,
    spinner,
});
