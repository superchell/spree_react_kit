// Core
import React, { Component } from "react";

// Instrumetns
import { object } from "prop-types";

export default class Catcher extends Component {
    static poropTypes = {
        children: object.isRequired,
    };

    state = {
        error: false,
    };

    componentDidCatch () {
        this.setState({
            error: true,
        });
    }

    render () {
        const { error } = this.state;
        const { children } = this.props;

        if (error) {
            return (
                <section>
                    <span>A mysterious 👽 &nbsp;error 📛 &nbsp;occured.</span>
                    <p>
                        Our space 🛰 &nbsp;engineers strike team 👩🏼‍🚀 👨🏼‍🚀 &nbsp;is
                        already working 🚀 &nbsp;in order to fix that for you!
                    </p>
                </section>
            );
        }

        return children;
    }
}
