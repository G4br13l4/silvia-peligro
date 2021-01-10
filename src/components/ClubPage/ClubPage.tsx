import React, { useRef, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Header } from '../../components/Common/Header/Header';
import { Button as CustomButton } from '../Common/Button/Button';
import InstagramFeed from '../Common/InstagramFeed/InstagramFeed';
import './ClubPage.scss';
import logo from '../../assets/imgs/club-logo.png';
import clubBadge from '../../assets/imgs/pin-club.png';

const ClubPage = props => {
  const { t, i18n } = useTranslation('common');
  const badge = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMove = e => {
      const height = badge.current?.clientHeight || 0;
      const width = badge.current?.clientWidth || 0;
      const xVal = e.layerX;
      const yVal = e.layerY;

      const yRotation = 50 * ((xVal - width / 2) / width);
      const xRotation = -50 * ((yVal - height / 2) / height);

      const newPosition = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      
      if (badge.current) {
        badge.current.style.transform = newPosition;
      }
    }
    
    badge.current?.addEventListener('mousemove', handleMove);
    return () => badge.current?.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const removeRotation = () => {
      if (badge.current) {
        badge.current.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
      }
    };

    badge.current?.addEventListener('mouseout', removeRotation);
    return () => badge.current?.removeEventListener('mouseout', removeRotation);
  }, []);

  return (
    <section className="club-section">
      <Header 
        img={logo}
      />

      <div className="content-wrapper">
        <div className="intro">
          <Trans
            t={t}
            i18nKey="ClubPage.intro"
            components={{ h: <h3/>, par: <p/> }}
          />
        </div>

        <div className="benefits">
          <Trans 
            t={t}
            i18nKey="ClubPage.benefits" 
            values={{ url: process.env.REACT_APP_INSTA_LINK_SP}}
            components={{ h: <h3/>, list: <ul/>, bullet: <li/>, txtLink: <a/>}}
          />    
        </div>

        <div className="how-participate">
          <Trans 
            t={t}
            i18nKey="ClubPage.howParticipate" 
            components={{ h: <h3/>, par: <p/>}}
          /> 
          <div className="pin-info">
            <img src={clubBadge} ref={badge}/>
            <div className="pin-info__content">
              <div><b>{t('ClubPage.generalPrice')}</b>: <span className="price">200 pesos</span></div>
              <div><b>{t('ClubPage.membersPrice')}</b>: <span className="price">180 pesos</span></div>
              <h3>{t('ClubPage.howGetPin')}</h3>
              <ul>
                <li>{t('ClubPage.getPinCDMX')} <a href={process.env.REACT_APP_INSTA_LINK_SP} target="_blank">@speligro</a>.</li>
                <li>{t('ClubPage.getPinNational')}: <br/>
                  <a className="store-link" href={process.env.REACT_APP_STORE_LINK} target="_blank">bazarama.com/t/silvia-peligro</a>
                  <a href={process.env.REACT_APP_STORE_LINK} target="_blank">
                      <CustomButton text={t('Button.goToStore')} />
                  </a><br/>
                </li>
                <li>Si vives fuera de México, debido a la sitación actual los envíos internacionales están suspendidos hasta nuevo aviso.</li>
              </ul>  
            </div>
          </div>
        </div>
      </div>
      
      <div className="intro-instagramFeed">{t('ClubPage.instagramIntro')}</div>
      <InstagramFeed 
        accountName="@clubdebordadomx"
        accountLink="https://www.instagram.com/clubdebordadomx/"
        token={process.env.REACT_APP_INSTAGRAM_TOKEN_SP}
      />

      <div className="greetings">
        <p>{t('ClubPage.greetings')}</p>
        <span>#ClubdeBordadomx</span>
      </div>
    </section>
  );
}       

export default  ClubPage;