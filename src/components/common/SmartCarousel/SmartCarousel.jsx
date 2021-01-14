import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl
} from 'reactstrap';
import { useTranslation} from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './SmartCarousel.scss';

export const SmartCarousel = props => {
    const { t, i18n } = useTranslation('common');
    const { items } = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const slides = items.map((item) => {
        return (
          <CarouselItem
            tag="div"
            key={item.id}
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
          >
              <div style={{backgroundImage: `url(${item.cover})` }} className="smartCarousel__img"/> 
              <h2>{item.name}</h2>
              <Link to={`/products/kits/${item.type}`} >
                <Button text={t(`KitsType.${item.type}`)} />
              </Link>
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
      <div className="smartCarousel">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
    );
}
