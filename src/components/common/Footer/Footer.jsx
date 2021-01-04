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

                {/* <InputGroup className="custom-input">
                    <Input placeholder={t('Mailing.input')} required/>
                    <InputGroupAddon addonType="prepend"><Button>{t('Mailing.btn')}</Button></InputGroupAddon>
                </InputGroup> */}

                <p className="intro">{t('Mailing.title')}</p>
                {/* Begin Mailchimp Signup Form */}
                <div id="mc_embed_signup">
                    <form action="https://kichink.us8.list-manage.com/subscribe/post?u=b9cb0284d7852b9c555efb828&amp;id=434325209d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
                            <div className="mc-field-group">
                                <label for="mce-EMAIL">{t('Mailing.email')}<span class="asterisk">*</span>:</label>
                                <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required/>
                            </div>
                            <div className="mc-field-group">
                                <label for="mce-FNAME">{t('Mailing.firstName')}: </label>
                                <input type="text" name="FNAME" className="name" placeholder={`${t('Input.optional')}`} id="mce-FNAME"/>
                            </div>
                            <div id="mce-responses" className="clear">
                                <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                                <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                            </div>   
                            <div style={{position:'absolute',left:'-5000px'}} aria-hidden="true">
                                <input type="text" name="b_b9cb0284d7852b9c555efb828_434325209d" tabindex="-1"/>
                            </div>
                            <div className="clear">
                                <input type="submit" value={t('Button.subscribe')} name="subscribe" id="mc-embedded-subscribe" className="button"/>
                            </div>
                        </div>
                    </form>
                </div>
                {/* End mc_embed_signup */}

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