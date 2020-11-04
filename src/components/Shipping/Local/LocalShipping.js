import React from 'react';
import { withTranslation } from 'react-i18next';
import FixedNavbar from '../../Common/FixedNavbar/FixedNavbar';
import Footer from '../../Common/Footer/Footer';
import { Header } from '../../Common/Header/Header.tsx';
import './LocalShipping.scss';
import clubLogo from '../../../assets/imgs/club-logo.png'

const LocalShipping = props => {
  const { t } = props;
  
  return (
    <section className="local-shipping-section">
      <FixedNavbar />
      <Header 
        title={t('LocalShipping.headerTitle')}
      />
      <div className="club-promotion">
        <img src={clubLogo} alt="embroidery club logo"/>
        <span>Con tu número de miembro recibe un 10% de descuento en tu pedido</span>
      </div>
      <div className="local-shipping-section__steps">
        <p>Este envío esta disponible si la dirección de entrega se encuentra dentro de las 16 alcaldías de la CDMX.</p>
        <p>Cada semana estaré recibiendo pedidos los días jueves y viernes de 11 am a 6 pm (las entregas son los dias martes).</p>

        <h3>Pasos para realizar pedido:</h3>
        <ul className="steps-list">
          <li className="step">
            <p>Enviame una lista de lo que te gustaría comprar
            por mensaje privado a instagram @speligro
            acompañado de tu código postal para cotizar tu envío
            Ve a la página 4 para saber como redactar tu pedido.</p>
            <p>Mínimo de compra 150 pesos mexicanos. </p>
          </li>

          <li className="step">
            En respuesta a tu mensaje te confirmaré
            si tengo todos los productos de tu lista,
            también te dire el costo de tu envío
            y te compartiré los datos bancarios
            para que puedas hacer la transferencia o depósito.
          </li>
          <li className="step">
            Una vez hecho el pago necesito una foto
            o captura de pantalla de tu comprobante de pago
            y los siguientes datos:
            <ul>
              <li>Nombre de quien recibirá el paquete</li>
              <li>Número celular</li>
              <li>Dirección de entrega</li>
            </ul>
          </li>
          <li className="step">
            <p>Si envías tu comprobante antes de las 6 pm del lunes,
            tu pedido será enviado el martes de esa misma semana.</p>
            <p>El martes recibirás un mensaje a tu celular
            de Dostavista con la información de tu entrega,
            el horario de las entregas es de 12 a 7 pm.</p>
          </li>
        </ul>
      </div>
      <Footer />
    </section>
  );
}       

export default  withTranslation('common') (LocalShipping);