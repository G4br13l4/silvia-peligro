import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { Header } from '../Common/Header/Header.tsx';
import { CardsContainer } from '../Common/CardsContainer/CardsContainer';
import { Button } from '../Common/Button/Button';
import './ShippingPage.scss';
  
const ShippingPage = props => {
  const { t } = props;
  return (
    <section className="shipping-section">
      <Header
          title="¿Cómo hago mi pedido?"
          subtitle="Envíos a toda la República Mexicana"
      />
      <CardsContainer>
        <p>Recibe tu pedido a la puerta de tu casa. Hacemos envíos a toda la República Mexicana.</p> <p>¿Dónde te gustaría que envíemos tu pedido? Elige una opción y checa los pasos a seguir para realizar tu pedido :)</p>
        <div>
          <Link to="/shipping/cdmx"><Button customClass="shipping-btn" text="Dentro de Ciudad de México"/></Link>
          <Link to="/shipping/national"><Button customClass="shipping-btn" text="Fuera de Ciudad de México"/></Link>
        </div>
      </CardsContainer>
    </section>
  );
}       

export default  withTranslation('common') (ShippingPage);
