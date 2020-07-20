import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap';
import '../../styles/shared/Footer.scss';
import instagram from './../../assets/icons/instagram_purple.png';
import mail from './../../assets/icons/mail_purple.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__border top-border"><span>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span></div>
            <div className="footer__input-wrapper">
                <p>Recibe avisos sobre mis próximos talleres/eventos directamente en tu bandeja de entrada</p>
                <InputGroup className="custom-input">
                    <Input placeholder="Escribe tu correo electrónico"/>
                    <InputGroupAddon addonType="prepend"><Button>Suscribirme</Button></InputGroupAddon>
                </InputGroup>
            </div>
            <div className="footer__border middle-border"><span>***************************************************************************************************************************************************************************************************************************************</span></div>
            <div className="footer__menu">
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Clases en línea</li>
                    <li>Envíos</li>
                    <li>Club de Bordado</li>
                    <li>Eventos</li>
                    <li>Contacto</li>
                </ul>
                <div>
                    <img alt="instagram-icon" src={instagram} />
                    <img alt="mail-icon" src={mail} />
                </div>
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