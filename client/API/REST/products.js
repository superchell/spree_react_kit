//Core
import fetch from 'isomorphic-unfetch';

// Instruments
import { MAIN_URL, token } from '../config';

export class Products {
    async get () {
        const response = await fetch(`${MAIN_URL}/products?token=${token}`);

        const { products, message } = await response.json();

        if (response.status !== 200) {
            throw new Error(message);
        }

        return products;
    }

    async getOne (slug) {
        const response = await fetch(`${MAIN_URL}/products/${slug}?token=${token}`);

        const product = await response.json();

        if (response.status !== 200) {
            throw new Error('Error get one Product');
        }

        return product;
    }
}
