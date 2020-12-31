import React, { useRef, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import { Header } from '../../components/Common/Header/Header';
import { Button as CustomButton } from '../Common/Button/Button';
import InstagramFeed from '../Common/InstagramFeed/InstagramFeed';
import './ClubPage.scss';
import logo from '../../assets/imgs/club-logo.png';
import clubBadge from '../../assets/imgs/pin-club.png';

const ClubPage = props => {
  const { t } = props;
  const badge = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleMove = e => {
      const height = badge.current?.clientHeight || 0;
      const width = badge.current?.clientWidth || 0;
      const xVal = e.layerX;
      const yVal = e.layerY;

      const yRotation = 50 * ((xVal - width / 2) / width);
      const xRotation = -50 * ((yVal - height / 2) / height);

      const newPosition = `perspective(500px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      
      if (badge.current) {
        badge.current.style.transform = newPosition;
      }
    }
    
    badge.current?.addEventListener('mousemove', handleMove);
    return () => badge.current?.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const removeRotation = () => {
      if (badge.current) {
        badge.current.style.transform = 'perspective(500px) rotateX(0) rotateY(0)';
      }
    };

    badge.current?.addEventListener('mouseout', removeRotation);
    return () => badge.current?.removeEventListener('mouseout', removeRotation);
  }, []);

  return (
    <section className="club-section">
      <Header 
        img={logo}
      />

      <div className="content-wrapper">
        <div className="intro">
          <h3>¿Qué es?</h3>
          <p>Club de Bordado es una comunidad de bordadorxs con base en CDMX (pero con miembros en todo México 
          y el mundo).</p>
          <h3>¿En qué consiste?</h3>
          <p>Además de estar en comunicación constante a través de nuestro grupo en FB, organizamos convivencias mensuales
          en distintos puntos de la ciudad con el fin de conocer y crear lazos con personas que disfrutan del bordado, NO son clases.</p> 
          <p>**A consecuencia de la situación actual (únicamente tendremos sesiones virtuales).**</p>      
          <p>No importa tu nivel o experiencia pero es necesario que ya sepas algunas puntadas para que puedas 
          compartir tus proyectos con el grupo.</p> 
        </div>

        <div className="benefits">
            <h3>Otros beneficios...</h3>
            <ul>
              <li>Tendrás un 10% de descuento en compras directas de materiales y kits de 
              bordado de Silvia Peligro (<a href="https://www.instagram.com/speligro/" target="_blank">@speligro</a>).</li>
              <li>Tendrás acceso a patrones para bordar exclusivos.</li>
            </ul>
        </div>

        <div className="how-participate">
          <h3>¿Cómo puedo participar?</h3>
          <p>Para formar parte de Club de Bordado debes tener tu pin metálico edición limitada 
            (este es nuestro modelo vigente).</p>
          <div className="pin-info">
            <img src={clubBadge} ref={badge}/>
            <div className="pin-info__content">
              <div><b>Precio Público General</b>: <span className="price">200 pesos</span></div>
              <div><b>Precio Miembrxs de Club de Bordado</b>: <span className="price">180 pesos</span></div>
              <h3>¿Dónde adquiero mi pin?</h3>
              <ul>
                <li>Si vives en CDMX, mandame mensaje directo a mi instagram <a href="https://www.instagram.com/speligro/" target="_blank">@speligro</a>.</li>
                <li>Si vives en otro estado de la República Mexicana, visita mi tienda en línea en: <br/>
                  <a className="store-link" href="https://bazarama.com/t/silvia-peligro" target="_blank">bazarama.com/t/silvia-peligro</a>
                  <a href="https://bazarama.com/t/silvia-peligro" target="_blank">
                      <CustomButton text="Ir a tienda"/>
                  </a><br/>
                </li>
              </ul>  
            </div>
          </div>
        </div>

      </div>
      
      <div className="intro-instagramFeed">Aquí podrás ver novedades, bordados de miembrxs del club, así como recuerdos de las últimas reuniones...</div>
      <InstagramFeed 
        accountName="@clubdebordadomx"
        accountLink="https://www.instagram.com/clubdebordadomx/"
        token={process.env.REACT_APP_INSTA_TOKEN_SP}
      />
      
    </section>
  );
}       

export default  withTranslation('common') (ClubPage);