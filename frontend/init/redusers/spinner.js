import { START_FETCHING, STOP_FETCHING } from '../types';

const spinner = (state = {}, action) => {
    switch (action.type) {

        case START_FETCHING:
            return { ...state, isSpining: true };

        case STOP_FETCHING:
            return { ...state, isSpining: false };

        default :
            return state;
    }
};

export default spinner;
