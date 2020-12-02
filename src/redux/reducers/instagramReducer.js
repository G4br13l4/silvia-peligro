import { LOAD_INSTAGRAM_POSTS } from '../actions/actionTypes';
import { defaultState } from '../defaultState';

export const instagramReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOAD_INSTAGRAM_POSTS:
            return {
                ...state,
                instagramFeed: {
                    ...state.instagramFeed,
                    silviaPeligro: action.payload
                }
            }
        default: 
            return state;
    }
}