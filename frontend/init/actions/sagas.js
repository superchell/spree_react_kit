//Core
import 'babel-polyfill';
import { all, call, apply, put, takeEvery } from 'redux-saga/effects';

// Instrumetns
import { TOKEN, API_URL } from '../REST/config';

import {
    FETCH_PRODUCT,
    FETCH_PRODUCTS,
    RESET_SERVER_FLAG,
    SERVER_FLAG_TO_FALSE,
    START_FETCH_PRODUCT,
    START_FETCH_PRODUCTS,

    START_FETCHING,
    STOP_FETCHING
} from "../types";


export function* cleanProduct () {
    yield put({ type: SERVER_FLAG_TO_FALSE });
}

export function* fetchProduct ({ payload }) {

    yield put({ type: START_FETCHING });

    const res =  yield call(fetch, `${API_URL}/products/${payload}?token=${TOKEN}`);
    const data =  yield apply(res, res.json);

    yield put({ type: FETCH_PRODUCT, payload: { data, isFetched: false }});

    yield put({ type: STOP_FETCHING });
}

export function* fetchProducts () {

    yield put({ type: START_FETCHING });

    const res =  yield call(fetch, `${API_URL}/products?token=${TOKEN}`);
    const data =  yield apply(res, res.json);

    yield put({ type: FETCH_PRODUCTS, payload: data.products });

    yield put({ type: STOP_FETCHING });
}


function* watchFetchAsync () {
    yield takeEvery(RESET_SERVER_FLAG, cleanProduct);
    yield takeEvery(START_FETCH_PRODUCT, fetchProduct);
    yield takeEvery(START_FETCH_PRODUCTS, fetchProducts);
}

function* rootSaga () {
    yield all([call(watchFetchAsync)]);
}

export default rootSaga;
