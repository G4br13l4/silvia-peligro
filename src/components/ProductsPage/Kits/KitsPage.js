import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../Common/Button/Button.tsx';
import { Header } from '../../Common/Header/Header.tsx';
import { SmartCarousel } from '../../Common/SmartCarousel/SmartCarousel';
import { ALL_KITS, KITS } from '../../../utils/kits';
import './KitsPage.scss';

const KitsPage = props => {
  const { t, i18n } = useTranslation('common');

  return (
    <section className="kits-section">
        <Header 
          title={t('KitsPage.headerTitle')}
          subtitle={t('KitsPage.headerSubtitle')}
        />
        <div className="kits-section__content">
          <p className="description">
            <Trans
              t={t}
              i18nKey="KitsPage.description"
              components={{ txtLink: <Link/> }}
            />
          </p>

          <div>
          <h3>Ver kits por temática: </h3>
            <div className="kits-selector">
              {
                Object.keys(KITS).map(kitType => {
                  return <Link to={`/products/kits/${kitType}`}><button>{t(`KitsType.${kitType}`)}</button></Link>
                })
              }
              {/* <a href="" target="_blank">
                <Button text={t('Button.seeCatalog')} customClass="btn-purple"/>
              </a> */}
            </div>
          </div>
          

          <div className="kits-carousel">
            <p>
              <Trans
                t={t}
                i18nKey="KitsPage.carouselDescription"
              />
            </p>
            <SmartCarousel  
              items={ALL_KITS} 
            />
          </div>

        </div>
    </section>
  );
}       

export default  KitsPage;