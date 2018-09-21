//Core
import { all, call } from 'redux-saga/effects';

//Watcher
import { watchProducts } from '../bus/products/saga/wtchers';
import { watchProduct } from '../bus/product/saga/wtchers';

export function* rootSaga () {
    yield all([call(watchProducts), call(watchProduct)]);
}
