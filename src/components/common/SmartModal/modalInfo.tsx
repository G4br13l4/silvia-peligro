import React from 'react';
import {
    Button, 
    UncontrolledCollapse, 
    CardBody, 
    Card
} from 'reactstrap';
import { Trans } from 'react-i18next';

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
    selectInstagramVideo: ({ setIgVideo, t }) => ({
        header: t('modalInfo.selectInstagramVideo.title'),
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
            cancel: t('Button.cancel'),
            confirm: t('Button.playVideo')
        }

    }),
    localShippingAnnouncement: ({ t }) => ({
        header: '',
        content: 
        (
            <div className="local-shipping-announcement">
                <div className="content">
                    <Trans
                        t={t}
                        i18nKey={t('modalInfo.localShippingAnnouncement.content')}
                        components={{ h: <h2/>, par: <p/>, spn: <span/>, list: <ul/>, bullet: <li/> }}
                    />
                </div>
            </div>
        ),
        img: null,
        buttons: {
            cancel: t('Button.close'),
            confirm: ''
        }

    }),
}