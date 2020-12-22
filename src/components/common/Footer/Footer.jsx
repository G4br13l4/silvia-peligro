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
import { ROUTES, NAV_ITEMS } from '../../../routes';

const Footer = props => {
    const { t } = props;

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
                    {NAV_ITEMS.map(item => 
                        <li key={item.id}>
                            <NavLink to={ROUTES[item.id.toUpperCase()].path}>{t(`Menu.${item.id}`)}</NavLink>
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