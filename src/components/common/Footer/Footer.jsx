import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import './Footer.scss';
import instagram from './../../../assets/icons/instagram_purple.png';
import mail from './../../../assets/icons/mail_purple.png';
import { ROUTES } from '../../../routes';

const Footer = props => {
    const { t } = props;

    const navItems = [
        { name: ROUTES.HOME.name, value: t('Menu.home')},
        // { name: ROUTES.PRODUCTS.name, value: t('Menu.products')},
        { name: ROUTES.KITS.name, value: t('Menu.kits')},
        { name: ROUTES.FRAMES.name, value: t('Menu.frames')},
        { name: ROUTES.CLASSES.name, value: t('Menu.classes')},
        { name: ROUTES.SHIPPING.name, value: t('Menu.shipping')},
        { name: ROUTES.CLUB.name, value: t('Menu.club')},
        { name: ROUTES.EVENTS.name, value: t('Menu.events')},
        { name: ROUTES.CONTACT.name, value: t('Menu.contact')}
    ];

    return (
        <footer className="footer">
            <div className="footer__border top-border"><span>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</span></div>
            <div className="footer__input-wrapper">
                <p>{t('Mailing.title')}</p>
                <InputGroup className="custom-input">
                    <Input placeholder={t('Mailing.input')}/>
                    <InputGroupAddon addonType="prepend"><Button>{t('Mailing.btn')}</Button></InputGroupAddon>
                </InputGroup>
            </div>
            <div className="footer__border middle-border"><span>***************************************************************************************************************************************************************************************************************************************</span></div>
            <div className="footer__menu">
                <ul>
                    {navItems.map(item => 
                        <li key={item.name}>
                            <NavLink to={ROUTES[item.name.toUpperCase()].path}>{item.value}</NavLink>
                        </li>)
                    }
                </ul>
                <div>
                    <a href="https://www.instagram.com/speligro/" target="_blank">
                        <img alt="instagram-icon" src={instagram} />
                    </a>
                    <a href="mailto:hola@silviapeligro.com">
                        <img alt="mail-icon" src={mail} />
                    </a>
                </div>
            </div>
            <div className="footer__copyrights">
            <div className="date">Copyrights © 2020 by Silvia Peligro</div>
            </div>
        </footer>
    );
}


export default withTranslation('common') (Footer);