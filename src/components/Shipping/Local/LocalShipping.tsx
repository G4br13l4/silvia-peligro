import React, { useEffect } from 'react';
import {
  Button, 
  UncontrolledCollapse, 
  CardBody, 
  Card
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Header } from '../../Common/Header/Header';
import Calendar from '../../Common/Calendar/Calendar';
import './LocalShipping.scss';
import clubLogo from '../../../assets/imgs/club-logo.png';
import requestTemplate from '../../../assets/imgs/request-template.jpg';
import { openModalAction, closeModalAction } from '../../../redux/actions';
import { ModalTypes } from '../../../interfaces';

const LocalShipping = props => {
  const { t } = props;
  const hasAnnouncement = false;

  const dispatch = useDispatch();
  const openModal = (...payload: Parameters<openModalAction>) => 
        dispatch(openModalAction(...payload));
  const showAnnouncement =  (modalName : ModalTypes) => {
      openModal({
          modalType: modalName,
      });
  };
  useEffect(() => {
    if(hasAnnouncement){
      showAnnouncement('localShippingAnnouncement');
    }
  },[]);
  
  return (
    <section className="local-shipping-section">
      <Header 
        title={t('LocalShipping.headerTitle')}
      />
      <div className="club-promotion">
        <img src={clubLogo} alt="embroidery club logo"/>
        <span>Con tu número de miembro recibe un 10% de descuento en tu pedido</span>
      </div>

      <div className="local-shipping-section__steps">
        <p>Este envío esta disponible si la dirección de entrega se encuentra dentro de las 16 alcaldías de la CDMX.</p>
        {hasAnnouncement && (
        <div className="shipping-announcement">
          <Button
          color="danger" onClick={() => showAnnouncement('localShippingAnnouncement')}
          >¡Ver Anuncio Importante!</Button>
        </div>)}
        <p>Cada semana estaré recibiendo pedidos los días jueves y viernes de 11 am a 6 pm (las entregas son los dias martes).</p>

        <h3>Pasos para realizar pedido:</h3>
        <ul className="steps-list">
          <li className="step">
            <p>Enviame una lista de lo que te gustaría comprar
            por mensaje privado a instagram @speligro
            acompañado de tu código postal para cotizar tu envío. <br/>
            Mínimo de compra 150 pesos mexicanos.</p>
            <Button id="request-template">
              ¿Cómo redactar mi pedido?, da clic aquí.
            </Button>
            <UncontrolledCollapse toggler="request-template">
                <Card>
                    <CardBody>
                      <div className="indications">
                        <p>Envíame tu pedido redactado en el cuerpo de tu mensaje, <b>no envies fotos o 
                        capturas de pantalla</b>.</p>
                        <p>Escribe tu <b>pedido en forma de lista</b>, evita enviar texto corrido.</p>
                        <p>Indicame el número de unidades de la siguiente forma <b>(número de piezas) producto </b>
                        si solo es una pieza no es necesario indicarlo.</p>
                      </div>
                      <div className="requestTemplate-wrapper">
                        <h3>Ejemplo:</h3>
                        <img className="requestTemplate" src={requestTemplate}/>
                      </div>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
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
      
      <div className="calendar-wrapper">
        <h3>Calendario de pedidos/entregas CDMX</h3>
        <p>(Estos calendarios aplican únicamente para pedidos hechos por mensaje en Instagram)</p>
        <Calendar
          customClass="decemberCalendar"
          month="12"
          year="2020"
          holidays={[21, 22, 25, 28, 29]}
        />
        <Calendar
          customClass="januaryCalendar"
          month="01"
          year="2021"
        />
      </div>
    </section>
  );
}       

export default  withTranslation('common') (LocalShipping);