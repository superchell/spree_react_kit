// Core
import React, { Component } from "react";
import { connect } from "react-redux";

// Instrumetns
import { object } from "prop-types";

class Spiner extends Component {
    static poropTypes = {
        children: object.isRequired,
    };

    render () {
        const { children, spinner } = this.props;

        if (spinner.isSpining) {
            return (
                <section>
                    <span>Load</span>
                </section>
            );
        }

        return children;
    }
}

const mapStateToProps = (state) => {
    return {
        spinner: state.spinner,
    };
};

export default connect(mapStateToProps)(Spiner);
