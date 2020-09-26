import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';
import FixedNavbar from '../../Common/FixedNavbar/FixedNavbar';
import Footer from '../../Common/Footer/Footer';
import { Button } from '../../Common/Button/Button.tsx';
import './KitsPage.scss';
import background from './../../../assets/imgs/background.jpg';
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
        <FixedNavbar />
          <header style={{backgroundImage: `url(${background})`}}>
            <h1>Kits de Bordado</h1>
            <span>Descubre todos los diseños para que te diviertas bordando.</span>
          </header>
          <div className="kits-section__content">
            <p>
              Estos kits son ideales para bordadores experimentados, por lo que si es tu primera vez bordando,  te recomendamos adquirir uno de nuestros cursos en línea sobre bordado básico ó asistir a uno de nuestros talleres.
            </p>
            <div className="kitsSize-table">
              <h2>Tipos de Kits</h2>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>¿Qué incluye?</th> 
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-row">
                    <td className="title small"><span>Chico</span></td>
                    <td className="content">Lorem ipsum dolor sit amet, consectetur.
                    Pellentesque interdum massa in dui aliquam.
                    Sed tincidunt velit in massa fermentum.
                    Ut id metus eget quam.
                    Morbi ut risus ut purus scelerisque.
                    Checa los modelos disponibles en xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </td>
                  </tr>
                  <tr className="table-row">
                    <td className="title large"><span>Grande</span></td>
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

              <p>Éstos son algunos de los kits que podrás encontrar en mi catálogo:</p>
              <a href="https://drive.google.com/file/d/15_q6SEJSQbVKaGlnrofZfXX8sc12vxgS/view?fbclid=IwAR06QzUy9h7GydvKNUaDrlxHeyTHT4jUK8peolZwRYSV-OqB_fQr98dtOG8">
                <Button text="Ver catálogo" customClass="btn-purple"/>
              </a>
            </div>
          </div>
        <Footer />
      </section>
    );
}       

export default KitsPage;