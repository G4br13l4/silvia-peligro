import React, { useEffect } from 'react';
import {
  Button, 
  UncontrolledCollapse, 
  CardBody, 
  Card
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { useTranslation, Trans } from 'react-i18next';
import { Header } from '../../Common/Header/Header';
import Calendar from '../../Common/Calendar/Calendar';
import './LocalShipping.scss';
import clubLogo from '../../../assets/imgs/club-logo.png';
import requestTemplate from '../../../assets/imgs/request-template.jpg';
import { openModalAction, closeModalAction } from '../../../redux/actions';
import { ModalTypes } from '../../../interfaces';

const LocalShipping = props => {
  const { t, i18n } = useTranslation('common');
  const hasAnnouncement = true;

  const dispatch = useDispatch();
  const openModal = (...payload: Parameters<openModalAction>) => 
        dispatch(openModalAction(...payload));
  const showAnnouncement =  (modalName : ModalTypes) => {
      openModal({
          modalType: modalName,
      });
  };
  useEffect(() => {
    if(hasAnnouncement){
      showAnnouncement('localShippingAnnouncement');
    }
  },[]);
  
  return (
    <section className="local-shipping-section">
      <Header 
        title={t('LocalShipping.headerTitle')}
      />
      <div className="club-promotion">
        <img src={clubLogo} alt="embroidery club logo"/>
        <span>{t('LocalShipping.clubPromo')}</span>
      </div>

      <div className="local-shipping-section__steps">
        <Trans
          t={t}
          i18nKey={t('LocalShipping.intro')}
          components={{ par: <p/> }}
        />
     
        {hasAnnouncement && (
        <div className="shipping-announcement">
          <Button
          color="danger" onClick={() => showAnnouncement('localShippingAnnouncement')}
          >{t('Button.important')}</Button>
        </div>)}

        <h3>Pasos para realizar pedido:</h3>
        <ul className="steps-list">
          <li className="step">
            <Trans 
              t={t}
              i18nKey="LocalShipping.step1" 
              values={{ url: process.env.REACT_APP_INSTA_LINK_SP}}
              components={{ par: <p/>, txtLink: <a/>}}
            />   
            <Button id="request-template">
              {t('LocalShipping.howToOrder')}
            </Button>
            <UncontrolledCollapse toggler="request-template">
                <Card>
                    <CardBody>
                      <div className="indications">
                        <Trans 
                          t={t}
                          i18nKey="LocalShipping.orderIndications" 
                          components={{ par: <p/>, bold: <b/> }}
                        />    
                      </div>
                      <div className="requestTemplate-wrapper">
                        <h3>{t('LocalShipping.example')}:</h3>
                        <img className="requestTemplate" src={requestTemplate}/>
                      </div>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
          </li>

          <li className="step">
            {t('LocalShipping.step2')}
          </li>
          <li className="step">
            <Trans 
              t={t}
              i18nKey="LocalShipping.step3" 
              components={{ list: <ul/>, bullet: <li/> }}
            />  
          </li>
          <li className="step">
            <Trans 
              t={t}
              i18nKey="LocalShipping.step4" 
              components={{ par: <p/> }}
            />  
          </li>
        </ul>
      </div>
      
      <div className="calendar-wrapper">
        <Trans 
          t={t}
          i18nKey="LocalShipping.calendarsIntro" 
          components={{ h: <h3/>, par: <p/> }}
        />  
        <Calendar
          customClass="decemberCalendar"
          month="12"
          year="2020"
          holidays={[21, 22, 25, 28, 29]}
        />
        <Calendar
          customClass="januaryCalendar"
          month="01"
          year="2021"
          holidays={[1, 4, 5, 8, 11, 12, 15]}
        />
      </div>
    </section>
  );
}       

export default  LocalShipping;