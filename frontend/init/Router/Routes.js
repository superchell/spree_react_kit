import React, { Component } from 'react';
import PlayLists from "../components/PlayLists";
import Songs from "../components/Songs";
import { Switch, Route } from 'react-router-dom';

export default class Routes extends Component {
    render () {
        return (
            <Switch>
                <Route exact component = { Songs } path = '/' />
                <Route component = { PlayLists } path = '/t/bags' />
            </Switch>
        );
    }
}
