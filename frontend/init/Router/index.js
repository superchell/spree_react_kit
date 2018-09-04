import React from "react";
import { StaticRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

class Router extends React.Component {
    renderRouter = () => {
        if (typeof window !== 'undefined') {
            return (
                <ConnectedRouter history = { this.props.history }>
                    {this.props.children}
                </ConnectedRouter>
            );
        }

        return (
            <StaticRouter context = { {} } location = { this.props.location }>
                {this.props.children}
            </StaticRouter>
        );

    }

    render () {
        return this.renderRouter();
    }
}

export default Router;
