import { OPEN_MODAL, CLOSE_MODAL, SET_IG_VIDEO } from '../actions/actionTypes';
import { defaultState } from '../defaultState';

export const modalReducer = (state = defaultState, action) => {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalVisible: true,
                modalType: action.modalState.modalType
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modalVisible: false
            }
        case SET_IG_VIDEO:
            return {
                ...state,
                instagramVideo: action.videoName
            }
        default: 
            return state;
    }
}