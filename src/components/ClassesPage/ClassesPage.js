import React from 'react';
import { withTranslation } from 'react-i18next';
import FixedNavbar from '../Common/FixedNavbar/FixedNavbar';
import Footer from '../Common/Footer/Footer';
import { Header } from '../Common/Header/Header.tsx';
import { Button } from '../Common/Button//Button.tsx';
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
            title="Clases en línea"
            subtitle="¿Te gustaría aprender a bordar o aprender nuevas técnicas para tus bordados?"
        />
        <div className="classCards-container">
          <Card background={basicClass} customClass="class-card">
            <h3>Clase de Bordado Básico</h3>
            <a href="https://bazarama.com.mx/products/clase-de-bordado-basico" target="_blank">
              <Button text={ t('Button.seeMore')}/>
            </a>
          </Card>
          <Card background={embroideryMin} customClass="class-card">
            <h3>Técnicas de bordado en miniatura</h3>
            <a href="https://www.domestika.org/es/courses/496-tecnicas-de-bordado-en-miniatura/silviapeligro" target="_blank">
              <Button text={ t('Button.seeMore')}/>
            </a>
          </Card>
        </div>
        <Footer />
      </section>
    );
}       

export default  withTranslation('common') (ClassesPage);
