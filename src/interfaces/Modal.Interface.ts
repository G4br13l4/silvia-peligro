import { ModalTypes } from './modalTypes.Type';

export interface ModalInterface {
    modalVisible: boolean;
    modalType: ModalTypes | null;
    onConfirm: Function;
    onCancel: Function;
    instagramVideo?: any;
    //callStack: string[];
    //errors: { [key: string]: boolean };
}

export interface OpenModalInterface {
    modalType: ModalTypes;
    onConfirm?: Function;
    onCancel?: Function;
}