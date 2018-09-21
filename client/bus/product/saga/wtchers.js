//Core
import { takeEvery, all, call } from 'redux-saga/effects';

//Types
import { types } from '../types';

//Workers
import { getProductWorker } from './workers/getProductWorker';

export function* watchProduct () {
    //watch all posts watcher
    //yield all([ call(watchSignup) ]);

    yield takeEvery(types.GET_PRODUCT_ASYNC, getProductWorker);
}
