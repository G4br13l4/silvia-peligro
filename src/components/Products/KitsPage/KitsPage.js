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
          <div className="kits-section__content">
            <p>
              Estos kits son ideales para bordadores experimentados, por lo que si es tu primera vez bordando,  te recomendamos adquirir uno de nuestros cursos en línea sobre bordado básico ó asistir a uno de nuestros talleres.
            </p>
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
        <Footer />
      </section>
    );
}       

export default KitsPage;