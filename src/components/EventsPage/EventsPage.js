import React from 'react';
import { withTranslation } from 'react-i18next';
import { Header } from '../Common/Header/Header.tsx';
import { CardsContainer } from '../Common/CardsContainer/CardsContainer';
import './EventsPage.scss';
  
const EventsPage = props => {
  const { t } = props;
  
    return (
      <section className="products-section">
        <Header
            title={t('EventsPage.title')}
            subtitle={t('EventsPage.subtitle')}
        />
        <CardsContainer>
          <div className="no-events">
            <h3>{t('EventsPage.noEventsMessage')}</h3>
          </div>
        </CardsContainer>
      </section>
    );
}       

export default  withTranslation('common') (EventsPage);
