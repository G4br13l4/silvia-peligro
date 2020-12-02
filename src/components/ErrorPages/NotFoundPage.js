import React from 'react';
import Pikacho from './../../assets/pikacho.jpg';
import './NotFoundPage.scss';
  
const NotFoundPage = props => {
    return (
      <div className="img-wrapper" style={{backgroundImage: `url(${Pikacho})`}}>
        <span className="message">404 Not Found</span>
      </div>
    );
}       

export default NotFoundPage;