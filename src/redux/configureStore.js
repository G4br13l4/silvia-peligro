import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import { defaultState } from './defaultState';

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for Redux dev tools

    return createStore(
        rootReducer, 
        defaultState, 
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
}

