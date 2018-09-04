import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

class PlayLists extends Component {
    render () {
        const { playlists } = this.props;

        return (
            <div>
                <Helmet>
                    <title>PlayLits</title>
                </Helmet>

                <h2>PlayLits</h2>
                <ul>
                    {playlists.map((playlist, index) => <li key = { `song${index}` }>{playlist}</li>)}
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
        playlists: state.playlists,
    }),
    (dispatch) => ({})
)(PlayLists));
