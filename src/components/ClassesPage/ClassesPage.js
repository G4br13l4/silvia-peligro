import React from 'react';
import { withTranslation } from 'react-i18next';
import FixedNavbar from '../Common/FixedNavbar/FixedNavbar';
import Footer from '../Common/Footer/Footer';
import { Header } from '../Common/Header/Header.tsx';
import { Button } from '../Common/Button//Button.tsx';
import { CardsContainer } from '../Common/CardsContainer/CardsContainer';
import { Card } from '../Common/Card/Card.tsx';
import basicClass from './../../assets/imgs/bordado_basico.jpg';
import embroideryMin from './../../assets/imgs/bordado_min.jpg';
import './ClassesPage.scss';
  
const ClassesPage = props => {
  const { t } = props;
  
    return (
      <section className="classes-section">
        <FixedNavbar />
        <Header
            title={t('ClassesPage.title')}
            subtitle={t('ClassesPage.subtitle')}
        />
        <CardsContainer>
          <Card background={basicClass} customClass="class-card">
            <h3>{t('ClassesPage.basicClassTitle')}</h3>
            <a href="https://bazarama.com.mx/products/clase-de-bordado-basico" target="_blank">
              <Button text={ t('Button.seeMore')}/>
            </a>
          </Card>
          <Card background={embroideryMin} customClass="class-card">
            <h3>{t('ClassesPage.miniatureClassTitle')}</h3>
            <a href="https://www.domestika.org/es/courses/496-tecnicas-de-bordado-en-miniatura/silviapeligro" target="_blank">
              <Button text={ t('Button.seeMore')}/>
            </a>
          </Card>
        </CardsContainer>
        <Footer />
      </section>
    );
}       

export default  withTranslation('common') (ClassesPage);
