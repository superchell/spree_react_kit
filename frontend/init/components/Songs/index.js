import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";

import { fetchData } from '../../actions';

import { Helmet } from "react-helmet";

class Songs extends Component {


    componentDidMount () {
        const { getData } = this.props;

        getData();
    }

    input = React.createRef();

    _addTrack = () => {
        const { addTrack } = this.props;


        addTrack(this.input.current.value);
        this.input.current.value = '';
    }

    render () {
        const { songs, data } = this.props;


        return (
            <div>
                <Helmet>
                    <title>Songs</title>
                </Helmet>

                <h2>{ data.title }</h2>
                <input ref = { this.input } type = 'text' />
                <p>
                    <button onClick = { this._addTrack }>AddTrack</button>
                </p>
                <ul>
                    {songs.map((song, index) => <li key = { `song${index}` }>{song}</li>)}
                </ul>

                <Link to = '/playlits'>playlits</Link>
                <br />
                <Link to = '/t/bags'>bags</Link>
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        songs: state.songs,
        data:  state.data,
    }),
    (dispatch) => ({
        addTrack: (track) => {
            dispatch({ type: 'ADD_TRACK', payload: track });
        },
        getData: () => {
            dispatch(fetchData());
        },
    })
)(Songs));
