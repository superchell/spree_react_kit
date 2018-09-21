//Core
import { apply, put } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../API';

//Action
import { getProdyct } from '../../actions';

export function* getProductWorker ({ payload: slug }) {
    try {
        const product = yield apply(api, api.products.getOne, [slug]);

        yield put(getProdyct(product));

    } catch (error) {
        console.log('getProductWorker', error);
    } finally {

    }
}
