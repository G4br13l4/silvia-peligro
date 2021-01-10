import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Common/Button/Button';
import MainBanner from './MainBanner/MainBanner';
import InstagramFeed from '../Common/InstagramFeed/InstagramFeed';
import { IGTV } from '../Common/IGTV';
import './HomePage.scss';
import { ModalInterface } from '../../interfaces';
import { closeModalAction } from '../../redux/actions';
import { DEFAULT_IGTV_VIDEO } from '../../utils/igtvVideos';

export interface HomeProps {
  //Own Props
  t: any;
  //State
  modalState: ModalInterface;
  //Actions
  closeModal: closeModalAction;
}

export const HomePage = (props: HomeProps) => {
  const {
    //Own Props
    t,
    //State
    modalState: { modalVisible },
    //Actions
    closeModal
  } = props;

  return (
    <div className="homePage">
      <MainBanner />
      <InstagramFeed 
        accountName="@speligro"
        accountLink={process.env.REACT_APP_INSTA_LINK_SP}
        token={process.env.REACT_APP_INSTAGRAM_TOKEN_SP}
      />
      <div className="igtv-wrapper">
        <div className="description">
          <h2>{t('HomePage.igtvTitle')}</h2>
          <p>{t('HomePage.igtvDescription')}</p>
          <Link to="/igtv"><Button text={t('Button.seeVideolist')}/></Link>
        </div>
        <IGTV markup={DEFAULT_IGTV_VIDEO.markup} />
      </div>
    </div>
  );
} 

