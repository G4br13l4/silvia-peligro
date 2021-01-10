import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import {
    Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
} from 'reactstrap';

import { modalInfo } from './modalInfo';
import { ModalInterface } from '../../../interfaces';
import { closeModalAction, setInstagramVideoAction } from '../../../redux/actions';

export interface Props {
    //State
    modalState: ModalInterface;

    //Actions
    closeModal: closeModalAction;
    setInstagramVideo: setInstagramVideoAction;
}

export const CustomModal = React.memo((props: Props) => {
    const { t, i18n } = useTranslation('common');
    
    const {
        //State
        modalState,
        //Actions
        closeModal,
        setInstagramVideo
    } = props;

    const {
        onCancel = closeModal,
        modalType,
        onConfirm,
        modalVisible    
    } = modalState;

    const [igVideo, setIgVideo] = useState('');
    const [blockButton, setBlockButton] = useState(false);

    const {
        img,
        header,
        content,
        buttons: { cancel, confirm }
    } = modalInfo[modalType!]({
        setIgVideo,
        t
    });

    const handleConfirm = () => {
        if(modalType === 'selectInstagramVideo'){
            setInstagramVideo(igVideo);
            closeModal();
        }
    }

    useEffect(() => {
        if(modalType === 'selectInstagramVideo') {
            if(!igVideo) {
                setBlockButton(true);
            } else {
                setBlockButton(false);
            }
        }
    }, [igVideo]);

   

    return (
        <div>
            <Modal isOpen={modalVisible} toggle={closeModal}>
                <ModalHeader toggle={closeModal}>{header}</ModalHeader>
                <ModalBody>
                {content}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={closeModal}>{cancel}</Button>
                    {confirm && <Button color="secondary" onClick={handleConfirm} disabled={blockButton}>{confirm}</Button>}
                </ModalFooter>
            </Modal>
        </div>
    );
});