//Core
import { all, call, apply, put, takeEvery } from 'redux-saga/effects';

//Instrumetns
import { fetchProduct } from '../sagas';
import { API_URL, TOKEN } from '../../REST/config';

const slug = 'slug';

const saga = fetchProduct({
    payload: slug,
});
const data = {
    id:          '1',
    name:        'name1',
    description: 'description',
    price:       '00',
};

const responseData = {
    data,
    isFetched: false,
};


const response = {
    status: 200,
    json:   () => Promise.resolve(responseData),
};

global.fetch = jest.fn(() => Promise.resolve(response));

import {
    FETCH_PRODUCT,
    START_FETCHING,
    STOP_FETCHING
} from "../../types";

describe('fetchProduct saga:', () => {
    test('should yield a «put» effect dispatching «START_FETCHING» action', () => {
        expect(saga.next().value).toEqual(
            put({
                type: START_FETCHING,
            })
        );
    });

    test('should yield a «call» effect calling «fetch» request', () => {
        expect(saga.next().value).toEqual(
            call(fetch, `${API_URL}/products/${slug}?token=${TOKEN}`)
        );
    });

    test('should yield an «apply» effect calling «response.json» method', () => {
        expect(saga.next(response).value).toEqual(
            apply(response, response.json)
        );
    });

    test('should yield a «put» effect dispatching «FETCH_PRODUCT» action', () => {
        expect(saga.next(data).value).toEqual(
            put({
                type:    FETCH_PRODUCT,
                payload: responseData,
            })
        );
    });

    test('should yield a «put» effect dispatching «STOP_FETCHING» action', () => {
        expect(saga.next().value).toEqual(
            put({
                type: STOP_FETCHING,
            })
        );
    });

    test('should finish', () => {
        expect(saga.next().done).toBe(true);
    });

});