import 'babel-polyfill';
import { FETCH_PRODUCT, FETCH_PRODUCTS } from '../types';

export const addSong = (track) => {
    dispatch({ type: 'ADD_TRACK', payload: track });
};

export const fetchData = () => (dispatch) => {

    const data = {
        test: 'data test done',
    };

    dispatch({ type: 'GET_DATA', payload: data });
};


export const fetchProduct = (slug) => async (dispatch) => {

    const res = await fetch(`/api/v1/products/${slug}?token=6590b78249859f69e93a405f01cefadb63e14930e1e855d7`);
    const data = await res.json();

    dispatch({ type: FETCH_PRODUCT, payload: { data, img: {}, isFetched: true }});


};

export const fetchProducts = () => async (dispatch) => {

    const res = await fetch(`/api/v1/products?token=6590b78249859f69e93a405f01cefadb63e14930e1e855d7`);
    const data = await res.json();

    dispatch({ type: FETCH_PRODUCTS, payload: data.products });
};
