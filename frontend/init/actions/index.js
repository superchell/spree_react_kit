//import fetch from 'isomorphic-unfetch';

export const addSong = (track) => {
    dispatch({ type: 'ADD_TRACK', payload: track });
};

export const fetchData = () => (dispatch) => {

    const data = {
        test: 'data test done',
    };

    dispatch({ type: 'GET_DATA', payload: data });
};
