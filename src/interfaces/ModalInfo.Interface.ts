import { ModalTypes } from './modalTypes.Type';

export type ModalInfoArgs = {
    email?: string;
    setIgVideo: Function;
    t: any;
};

export type ModalReturn = {
    header: string;
    content: any;
    img: any;
    buttons: { cancel: string; confirm: string };
};

export type ModalInfo = Record<ModalTypes, (arg: ModalInfoArgs) => ModalReturn>;