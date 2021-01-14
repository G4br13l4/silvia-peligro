import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Header } from '../Common/Header/Header.tsx';
import { Button } from '../Common/Button//Button.tsx';
import { CardsContainer } from '../Common/CardsContainer/CardsContainer';
import { Card } from '../Common/Card/Card.tsx';
import kit from './../../assets/imgs/kit-pajarito.png';
import frames from './../../assets/imgs/frames.jpg';
import './ProductsPage.scss';
  
const ProductsPage = props => {
  const { t } = props;
  
    return (
      <section className="products-section">
        <Header
            title={t('ProductsPage.title')}
            subtitle={t('ProductsPage.subtitle')}
        />
        <CardsContainer>
          <Card background={kit} customClass="product-card">
            <h3>{t('ProductsPage.kitsTitle')}</h3>
            <Link to="/products/kits">
              <Button text={ t('Button.seeMore')}/>
            </Link>
          </Card>
          <Card background={frames} customClass="product-card">
            <h3>{t('ProductsPage.framesTitle')}</h3>
            <a href="" target="_blank">
              <Button text={ t('Button.seeMore')}/>
            </a>
          </Card>
        </CardsContainer>
      </section>
    );
}       

export default  withTranslation('common') (ProductsPage);
