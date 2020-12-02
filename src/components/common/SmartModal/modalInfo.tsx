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
}