import {createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers';
import thunk from 'redux-thunk';
import logger from '../logger';

const enhancer = composeWithDevTools(
    applyMiddleware(
        thunk,
        logger,
    ),
);

// const store = createStore(reducer, enhancer);

export default (() => {
    const store = createStore(reducer, enhancer);
    return store
})();
