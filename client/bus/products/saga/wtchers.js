//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { getProductsWorker } from './workers/getProductsWorker';
import { getFilterWorker } from './workers/getFilterWorker';

export function* watchProducts () {
    //watch all posts watcher
    //yield all([ call(watchSignup) ]);

    yield takeEvery(types.GET_PRODUCTS_ASYNC, getProductsWorker);
    yield takeEvery(types.GET_PRODUCTS_FILTER_ASYNC, getFilterWorker);
}
