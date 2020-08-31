import React, { useState } from 'react';
import './MainBanner.scss';
import mainSlideBanner_1 from './../../assets/imgs/mainSlideBanner_1.jpg';
import mainSlideBanner_2 from './../../assets/imgs/mainSlideBanner_2.jpg';
import mainSlideBanner_3 from './../../assets/imgs/mainSlideBanner_3.jpg';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';

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
  
const MainBanner = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
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
                <h1 className="title line-clamp">{item.title}</h1>
                <p className="paragraph line-clamp">{item.summary}</p>
                <button className="see-more-btn"><span>Ver más</span></button>
            </div>
        </CarouselItem>
      );
    });
  
    return (
      <div className="carousel-wrapper">
        <style>
          {
            `
            .carousel-wrapper {
              width: 100vw;
              height: fit-content;
              margin-top: 14vh;
            }

            .carousel {
              width: 100%;
              height: 100%;
            }

            .carousel-inner {
                width: inherit;
                height: inherit;
            }

            .carousel-control-prev,
            .carousel-control-next {
                min-height: 268px;
                height: 42vh; //same as boxImg
            }

            .carousel-indicators li {
                background-color: #161616;
                opacity: .4;
            }

            /* MEDIUM DEVICES (landscape tablets, 768px and up) */
            @media only screen and (min-width: 48em) {
              .carousel-wrapper {
                height: 72vh;
                min-height: 400px;
              }

              .carousel-control-prev,
              .carousel-control-next {
                min-height: 350px;
                height: 63vh; //same as boxImg
              }
            }`
          }
        </style>
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

export default MainBanner;