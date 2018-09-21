//Core
import { apply, put } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../API';
import NProgress from "nprogress";

//Action
import { getProdyctsFilter } from '../../actions';


export function* getFilterWorker ({ payload: filter }) {
    try {
        NProgress.start();

        const products = yield apply(api, api.products.get);

        const filterProducts = yield products.filter(
            (product) => {
                return product.taxon_ids.includes(filter);
            }
        );

        yield put(getProdyctsFilter(filterProducts));
    } catch (error) {
        console.log('getProductsWorker', error);
    } finally {
        NProgress.done();
    }
}
