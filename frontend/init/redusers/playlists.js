const playlists = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_PLAYLIST':
            return [...state, action.payload];

        default :
            return state;
    }
};

export default playlists;
