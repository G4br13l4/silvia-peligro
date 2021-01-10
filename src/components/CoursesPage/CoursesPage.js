import React from 'react';
import { withTranslation } from 'react-i18next';
import { Header } from '../Common/Header/Header.tsx';
import { Button } from '../Common/Button//Button.tsx';
import { CardsContainer } from '../Common/CardsContainer/CardsContainer';
import { Card } from '../Common/Card/Card.tsx';
import basicClass from './../../assets/imgs/bordado_basico.jpg';
import embroideryMin from './../../assets/imgs/bordado_min.jpg';
import './CoursesPage.scss';
  
const CoursesPage = props => {
  const { t } = props;
  
    return (
      <section className="courses-section">
        <Header
            title={t('CoursesPage.title')}
            subtitle={t('CoursesPage.subtitle')}
        />
        <CardsContainer>
          <Card background={basicClass} customClass="class-card">
            <h3>{t('CoursesPage.basicClassTitle')}</h3>
            <a href="#" target="_blank">
              <Button text={ t('Button.seeMore')}/>
            </a>
          </Card>
          <Card background={embroideryMin} customClass="class-card">
            <h3>{t('CoursesPage.miniatureClassTitle')}</h3>
            <a href={process.env.REACT_APP_MINIATURE_COURSE} target="_blank">
              <Button text={ t('Button.seeMore')}/>
            </a>
          </Card>
        </CardsContainer>
      </section>
    );
}       

export default  withTranslation('common') (CoursesPage);
