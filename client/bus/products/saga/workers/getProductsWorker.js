//Core
import { apply, put } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../API';

//Action
import { getProdycts } from '../../actions';

export function* getProductsWorker () {
    try {
        const products = yield apply(api, api.products.get);

        yield put(getProdycts(products));
    } catch (error) {
        console.log('getProductsWorker', error);
    } finally {

    }
}
