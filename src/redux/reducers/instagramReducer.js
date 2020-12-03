import { LOAD_INSTAGRAM_POSTS } from '../actions/actionTypes';
import { defaultState } from '../defaultState';

export const instagramReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOAD_INSTAGRAM_POSTS:
            const { account, posts } = action.payload;
            return {
                ...state,
                [account]: posts
            }
        default: 
            return state;
    }
}