import { createSelector } from 'reselect';
import { AppStateInterface } from '../interfaces';

export const modalSelector = createSelector(
    (state: AppStateInterface) => state.modalState,
    modalState => modalState
);