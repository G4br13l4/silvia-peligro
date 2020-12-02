import { OpenModalInterface } from '../../interfaces';
import { OPEN_MODAL, CLOSE_MODAL, SET_IG_VIDEO } from './actionTypes';

export type openModalAction = typeof openModalAction;
export const openModalAction = (modalState: OpenModalInterface) => ({
    type: OPEN_MODAL,
    modalState
});

export type closeModalAction = typeof closeModalAction;
export const closeModalAction = () => ({ type: CLOSE_MODAL});

export type setInstagramVideoAction = typeof setInstagramVideoAction;
export const setInstagramVideoAction = (videoName: string) => ({ 
    type: SET_IG_VIDEO,
    videoName
});
