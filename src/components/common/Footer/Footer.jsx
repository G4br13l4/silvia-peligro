import React from 'react';
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import './Footer.scss';
import instagram from './../../../assets/icons/instagram_purple.png';
import mail from './../../../assets/icons/mail_purple.png';

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
                    <li>{t('Menu.home')}</li>
                    <li>{t('Menu.products')}</li>
                    <li>{t('Menu.classes')}</li>
                    <li>{t('Menu.shipping')}</li>
                    <li>{t('Menu.club')}</li>
                    <li>{t('Menu.events')}</li>
                    <li>{t('Menu.contact')}</li>
                </ul>
                <div>
                    <img alt="instagram-icon" src={instagram} />
                    <img alt="mail-icon" src={mail} />
                </div>
            </div>
            <div className="footer__copyrights">
            <div className="date">Copyrights © 2020 by Silvia Peligro</div>
            </div>
        </footer>
    );
}


export default withTranslation('common') (Footer);