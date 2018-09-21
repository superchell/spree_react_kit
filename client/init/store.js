//Core
import { createStore } from 'redux';

//Reducer
import { rootReducer } from './rootReducer';

//Middleware
import { enhancedStore } from './middleware/core';

export function initializeStore (initialState) {

    return createStore(rootReducer, initialState, enhancedStore);
}
