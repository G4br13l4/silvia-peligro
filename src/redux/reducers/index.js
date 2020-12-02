import { combineReducers } from 'redux';
import { instagramReducer } from './instagramReducer';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
    modalState: modalReducer,
    instagramFeed: instagramReducer
});

export default rootReducer;