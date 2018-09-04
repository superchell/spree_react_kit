import { combineReducers } from 'redux';

import songs from './songs';
import playlists from './playlists';
import data from './data';

export default combineReducers({
    songs,
    playlists,
    data,
});
