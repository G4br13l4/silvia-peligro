import React from 'react';
import FixedNavbar from '../Common/FixedNavbar/FixedNavbar';
import Footer from '../Common/Footer/Footer';
import Pikacho from './../../assets/pikacho.jpg';
import './NotFoundPage.scss';
  
const NotFoundPage = props => {
    return (
      <>
        <FixedNavbar />
        <div className="img-wrapper" style={{backgroundImage: `url(${Pikacho})`}}>
          <span className="message">404 Not Found</span>
        </div>
        <Footer />
      </>
    );
}       

export default NotFoundPage;