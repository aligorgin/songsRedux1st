import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({song}) => {
    if (!song) {
        return <div>dude just select a song!</div>
    }

    return (
        <div>
            <h3>Details</h3>
            <p>
                Title : {song.title}
                <br/>
                Duration : {song.duration}
            </p>
        </div>
    );
};

const mapStateTOProps = state => {
    return {song: state.selectedSong}
};

export default connect(mapStateTOProps)(SongDetail);