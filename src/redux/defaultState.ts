import { AppStateInterface }  from '../interfaces';

export const defaultState: AppStateInterface = {
    modalState: {
        modalVisible: false,
        modalType: null,
        onConfirm: () => {},
        onCancel: () => {},
        instagramVideo: null,
    },
    instagramFeed : {
        silviaPeligro: [],
        embroideryClub: []
    }
};