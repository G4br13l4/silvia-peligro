import React from 'react';
import {
    Button, 
    UncontrolledCollapse, 
    CardBody, 
    Card
} from 'reactstrap';

import { ModalInfo } from '../../../interfaces';
import { RadioButton } from '../RadioButton';
import { IGTV_VIDEOS } from '../../../utils/igtvVideos';

const styleBtn = { 
    background: 'white', 
    color: 'black', 
    border: 'none',
    marginBottom: '.5rem', 
    width: "100%" 
};

export const modalInfo: ModalInfo = {
    selectInstagramVideo: ({ setIgVideo }) => ({
        header: 'IGTV Vídeos',
        content: 
        (
            <>
                {
                    Object.keys(IGTV_VIDEOS).map(serie => { 
                        return (
                        <React.Fragment key={IGTV_VIDEOS[serie].id}>
                            <Button id={IGTV_VIDEOS[serie].id} style={styleBtn}>
                                {IGTV_VIDEOS[serie].name}
                            </Button>
                            <UncontrolledCollapse toggler={IGTV_VIDEOS[serie].id}>
                                <Card>
                                    <CardBody>
                                        {
                                        IGTV_VIDEOS[serie].videos.map(video => (
                                            <RadioButton
                                                key={video.id}
                                                name="igtv-video"
                                                label={video.title}
                                                value={video.id}
                                                onChange={target => setIgVideo(target.value)}
                                            />
                                        ))
                                        }
                                    </CardBody>
                                </Card>
                            </UncontrolledCollapse>            
                        </React.Fragment>
                        )
                    })
                }
            </>
        ),
        img: null,
        buttons: {
            cancel: 'Cancel',
            confirm: 'Reproducir vídeo'
        }

    }),
    localShippingAnnouncement: () => ({
        header: '',
        content: 
        (
            <div className="local-shipping-announcement">
                <div className="content">
                    <h2>AVISO IMPORTANTE</h2>
                    <p>Esta semana ampliaré el rango del área de entregas, 
                    además de abarcar las 16 alcaldías de la CDMX 
                    haré entregas en <span>algunas zonas de los siguientes municipios:</span></p>
                    <ul>
                        <li>Tlalnepantla de Baz</li>
                        <li>Naucalpan de Juarez</li>
                        <li>Atizapán de Zaragoza</li>
                        <li>Huixquilucan de Degollado</li>
                        <li>Nezahualcóyotl</li>
                        <li>Los Reyes la Paz</li>
                    </ul>
                    <p>Recuerda acompañar tu pedido de tu <span>código postal</span> 
                    para confirmar que tu dirección se encuentra <span>dentro de la zona de entregas</span>.</p>
                </div>
            </div>
        ),
        img: null,
        buttons: {
            cancel: 'Cerrar',
            confirm: ''
        }

    }),
}