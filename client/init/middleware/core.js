//Core
import { applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

//Custom
import { customThunk } from './customThunk';

export const __DEV__ = process.env.NODE_ENV === 'development';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title: (action) => {
            return action.error ? 'firebrick' : 'deepskyblue';
        },
        prevState: () => 'dodgerblue',
        action:    () => 'greenyellow',
        nextState: () => 'olivedrab',
        error:     () => 'firebrick',
    },
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [customThunk, sagaMiddleware];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = __DEV__
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware };
