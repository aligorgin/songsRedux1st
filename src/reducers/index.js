import {combineReducers} from "redux";

const songsReducer = () => {
    return [
        {title: 'higher', duration: '2:48'},
        {title: 'somebody else', duration: '5:01'},
        {title: 'reverie', duration: '4:59'},
        {title: 'tightrope', duration: '6:24'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});