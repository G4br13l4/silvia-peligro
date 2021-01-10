import React, { useEffect } from 'react';
import { Button } from 'reactstrap';
import { Button as CustomButton } from '../../Common/Button/Button';
import { useDispatch } from 'react-redux';
import { withTranslation } from 'react-i18next';
import { Header } from '../../Common/Header/Header';
import './NationalShipping.scss';
import mobileView from '../../../assets/imgs/mobile-view.png';
import laptopView from '../../../assets/imgs/laptop-view.png';
import { openModalAction, closeModalAction } from '../../../redux/actions';
import { ModalTypes } from '../../../interfaces';

const NationalShipping = props => {
  const { t } = props;
  const hasAnnouncement = true;

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
    <section className="nationalShipping-section">
      <Header 
        title="¿Cómo hacer tu pedido si no vives en CDMX?"
      />
      <div className="nationalShipping-section__content">
        <div className="nationalShipping-section__info">
          <p>Este tipo de pedido es para personas que necesiten envío a algún otro estado de la república mexicana.</p>
          
          {hasAnnouncement && (
          <div className="shipping-announcement">
            <Button
            color="danger" onClick={() => showAnnouncement('localShippingAnnouncement')}
            >¡Ver Anuncio Importante!</Button>
          </div>)}

          <p>Visita mi tienda en línea, ahi podrás seleccionar todos los productos que quieras comprar y hacer 
            tu pago sin necesidad de enviarme mensaje.</p>
          <p className="store-links">
            <b>Mi tienda en línea es:</b>
            <a className="" href={process.env.REACT_APP_STORE_LINK} target="_blank">bazarama.com/t/silvia-peligro</a>
            <a href={process.env.REACT_APP_STORE_LINK} target="_blank">
                <CustomButton text="Ir a tienda"/>
            </a>
          </p>
          <p>El costo promedio de los envíos nacionales es de 130 pesos, la cotización exacta se hace directamente
            al momento de tu compra en la plataforma.</p>
          <p>No hay un mínimo de compra.</p>
        </div>
        <div className="nationalShipping-section__viewWrapper">
          <picture>
            <source media="(min-width:480px)" srcSet={laptopView}/>
            <img src={mobileView}/>
          </picture>
        </div>
      </div>
    </section>
  );
}       

export default  withTranslation('common') (NationalShipping);