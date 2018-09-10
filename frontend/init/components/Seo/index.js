import React, { Component } from 'react';
import { Helmet } from "react-helmet";

export default class Seo extends Component {
    render () {
        const { title } = this.props;

        return (
            <Helmet>
                <title>{title}</title>
            </Helmet>
        );
    }
}
