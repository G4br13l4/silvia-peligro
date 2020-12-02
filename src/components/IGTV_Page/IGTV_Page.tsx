import React, { useState, useEffect } from 'react';

import {
    Button
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { IGTV } from '../Common/IGTV';
import { Header } from '../Common/Header/Header';
import { ModalTypes } from '../../interfaces';
import { openModalAction, closeModalAction } from '../../redux/actions';
import './IGTV_Page.scss';
import { IGTV_VIDEOS, DEFAULT_IGTV_VIDEO } from '../../utils/igtvVideos';
  
const IGTV_Page = props => {
    const [videos, setVideos] = useState<any[] | null>(null);
    useEffect(() => {
        const allVideos = Object.keys(IGTV_VIDEOS).reduce((allVideos : any[], serie) => {
            allVideos = [...allVideos, ...IGTV_VIDEOS[serie].videos];
            return allVideos;
        }, []);
        setVideos(allVideos);
    },[]);

    const idSelectedVideo = useSelector(state => state.modalState.instagramVideo) || DEFAULT_IGTV_VIDEO.id;
    const [selectedVideo, setSelectedVideo] = useState(IGTV_VIDEOS.christmas.videos[1]);
    useEffect(() => {
        if(videos) {
            setSelectedVideo(
                videos.find(video => video.id === idSelectedVideo)
            );
        }
    }, [videos, idSelectedVideo]);

    const dispatch = useDispatch();
    const openModal = (...payload: Parameters<openModalAction>) => 
        dispatch(openModalAction(...payload));
    // const closeModal = (...payload: Parameters<closeModalAction>) => 
    //     dispatch(closeModalAction(...payload))
    const openVideolist =  (modalName : ModalTypes) => {
        openModal({
            modalType: modalName,
            // onConfirm: () => {
            //     console.log("cerrar modal");
            //     //closeModal();
            // },
            // onCancel: () => {
            //     //closeModal();
            // }
        });
    };

    const { t } = props;
  
    return (
        <section className="igtv-section">
            <Header
                title="Instagram TV"
                subtitle={t('IGTV_Page.subtitle')}
            />


            <div className="igtv-section__body">
                <div className="description">
                    <h2 className="video-title"><span>Vídeo mostrado:</span><br/> {selectedVideo.title} </h2>
                    <Button color="danger" onClick={() => openVideolist('selectInstagramVideo')}>Mostrar otro vídeo</Button>
                    <p>Vídeos disponibles: {videos?.length}</p>
                </div>
                <IGTV markup={selectedVideo.markup} />
            </div>
        </section>
    );
}       

export default  withTranslation('common') (IGTV_Page);
