import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import './MainBanner.scss';
import mainSlideBanner_1 from './../../../assets/imgs/mainSlideBanner_1.jpg';
import mainSlideBanner_2 from './../../../assets/imgs/mainSlideBanner_2.jpg';
import mainSlideBanner_3 from './../../../assets/imgs/mainSlideBanner_3.jpg';
import { Button } from '../../Common/Button/Button.tsx';


const items = [
    {
      id: 1,
      cover: mainSlideBanner_1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      summary: 'Cras suscipit risus non nunc fermentum, maximus ornare dolor interdum. Praesent tincidunt vel magna sit.'
    },
    {
      id: 2,
      cover: mainSlideBanner_2,
      title: 'Nulla rutrum posuere ipsum, sit amet rhoncus lacus. Duis hendrerit gravida nisi, eu vehicula sem fermentum.',
      summary: 'Cras suscipit risus non nunc fermentum, maximus ornare dolor interdum. Praesent tincidunt vel magna sit.'
    },
    {
      id: 3,
      cover: mainSlideBanner_3,
      title: 'Quisque tempor sem in eros malesuada, auctor volutpat ex.',
      summary: 'Morbi placerat et nibh id finibus. Duis eget tincidunt elit, sed vehicula lacus. Nulla a.'
    }
  ];
  
const MainBanner = props => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const { t } = props;
  
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
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="mainSlideBanner"
          tag="div"
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
            <div style={{backgroundImage: `url(${item.cover})` }} className="mainSlideBanner__boxImg"/> 
            <div className="mainSlideBanner__txtBox">
                <h2 className="title line-clamp">{item.title}</h2>
                <p className="paragraph line-clamp">{item.summary}</p> 
                <Button text={ t('Button.seeMore')}/>
            </div>
        </CarouselItem>
      );
    });
  
    return (
      <div className="mainBanner">
        <Carousel
          //activeIndex={activeIndex}
          activeIndex={0}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
    );
}       

export default withTranslation('common') (MainBanner);
