// Core
import React from 'react';

// App
import ClientApp from './startup/ClientApp';
import ServerApp from './startup/ServerApp';

export default (props) => {

    if (typeof window !== 'undefined') {

        return <ClientApp { ...props } />;
    }

    return <ServerApp { ...props } />;

};
