import React from 'react';
import FixedNavbar from '../../Common/FixedNavbar/FixedNavbar';
import Footer from '../../Common/Footer/Footer';
import './KitsPage.scss';
import background from './../../../assets/imgs/background.jpg';
  
const KitsPage = props => {
    return (
      <section className="kits-section">
        <FixedNavbar />
          <header style={{backgroundImage: `url(${background})`}}>
            <h1>Kits de Bordado</h1>
            <span>Descubre todos los diseños para que te diviertas bordando.</span>
          </header>
        <Footer />
      </section>
    );
}       

export default KitsPage;