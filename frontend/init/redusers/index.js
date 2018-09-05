import { combineReducers } from 'redux';

import products from './products';
import data from './data';

export default combineReducers({
    products,
    data,
});
