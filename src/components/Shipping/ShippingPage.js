import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import { Header } from '../Common/Header/Header.tsx';
import { Button } from '../Common/Button/Button';
import './ShippingPage.scss';
  
const ShippingPage = props => {
  const { t, i18n } = useTranslation('common');

  return (
    <section className="shipping-section">
      <Header
          title={t('ShippingPage.title')}
          subtitle={t('ShippingPage.subtitle')}
      />
      <div className="shipping-section__content">
        <Trans
          t={t}
          i18nKey="ShippingPage.intro"
          components={{ par: <p/> }}
        />
        <div>
          <Link to="/shipping/cdmx"><Button customClass="shipping-btn" text={t('Button.mexicoCity')}/></Link>
          <Link to="/shipping/national"><Button customClass="shipping-btn" text={t('Button.national')}/></Link>
        </div>
      </div>
    </section>
  );
}       

export default  ShippingPage;
