import React from 'react';
import '../../styles/shared/Footer.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__menu">
                <div className="border-box"><span>***************************************************************************************************************************************************************************************************************************************</span></div>
                Blanco
            </div>
            <div className="footer__copyrights">
                <div className="languages">
                    <button>ES</button>
                    <button>EN</button>
                </div>
                <div className="date">Copyrights © 2020 by Silvia  Peligro</div>
            </div>
        </footer>
    );
}