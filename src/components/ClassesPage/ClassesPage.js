import React from 'react';
import FixedNavbar from '../Common/FixedNavbar/FixedNavbar';
import Footer from '../Common/Footer/Footer';
import { Header } from '../Common/Header/Header.tsx';
import './ClassesPage.scss';
  
const ClassesPage = props => {
    return (
      <section className="classes-section">
        <FixedNavbar />
        <Header
            title="Clases en línea"
            subtitle="¿Te gustaría aprender a bordar o aprender nuevas técnicas para tus bordados?"
        />
        <Footer />
      </section>
    );
}       

export default ClassesPage;
