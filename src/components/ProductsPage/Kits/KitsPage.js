import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import { Button } from '../../Common/Button/Button.tsx';
import { Header } from '../../Common/Header/Header.tsx';
import './KitsPage.scss';
import kit1 from './../../../assets/imgs/kit1.jpg';
import kit2 from './../../../assets/imgs/kit2.jpg';
import kit3 from './../../../assets/imgs/kit3.jpg';

const items = [
  {
    id: 1,
    cover: kit1,
    title: 'Kit 1',
  },
  {
    id: 2,
    cover: kit2,
    title: 'Kit 2'
  },
  {
    id: 3,
    cover: kit3,
    title: 'Kit 3'
  }
];

const KitsPage = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { t } = props;

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="kitsCarousel"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
          <div style={{backgroundImage: `url(${item.cover})` }} className="kitsCarousel__img"/> 
          <h2>{item.title}</h2>
      </CarouselItem>
    );
  });

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
    return (
      <section className="kits-section">
          <Header 
            title={t('KitsPage.headerTitle')}
            subtitle={t('KitsPage.headerSubtitle')}
          />
          <div className="kits-section__content">
            <p>
              {t('KitsPage.description')}
            </p>
            <div className="kitsSize-table">
              <h2>{t('KitsPage.tableTitle')}</h2>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>{t('KitsPage.whatIncludes')}</th> 
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-row">
                    <td className="title small"><span>{t('KitsPage.small')}</span></td>
                    <td className="content">Lorem ipsum dolor sit amet, consectetur.
                    Pellentesque interdum massa in dui aliquam.
                    Sed tincidunt velit in massa fermentum.
                    Ut id metus eget quam.
                    Morbi ut risus ut purus scelerisque.
                    Checa los modelos disponibles en xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="title large"><span>{t('KitsPage.large')}</span></td>
                    <td className="content">Lorem ipsum dolor sit amet, consectetur.
                    Pellentesque interdum massa in dui aliquam.
                    Sed tincidunt velit in massa fermentum.
                    Ut id metus eget quam.
                    Morbi ut risus ut purus scelerisque.
                    Checa los modelos disponibles en xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="kits-carousel">
              <Carousel
                activeIndex={activeIndex}
                //activeIndex={0}
                next={next}
                previous={previous}
              >
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>

              <p>{t('KitsPage.carouselDescription')}</p>
              <a href="https://drive.google.com/file/d/15_q6SEJSQbVKaGlnrofZfXX8sc12vxgS/view?fbclid=IwAR06QzUy9h7GydvKNUaDrlxHeyTHT4jUK8peolZwRYSV-OqB_fQr98dtOG8" target="_blank">
                <Button text={t('Button.seeCatalog')} customClass="btn-purple"/>
              </a>
            </div>
          </div>
      </section>
    );
}       

export default  withTranslation('common') (KitsPage);