import React from 'react';
import { withTranslation } from 'react-i18next';
import { 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './FixedNavbar.scss';
import { ROUTES } from '../../../routes';

import logo from './../../../assets/imgs/logo.jpg';
import instagram from './../../../assets/icons/instagram_white.png';
import mail from './../../../assets/icons/mail_white.png';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

class FixedNavbar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            openHamburger: false,
            isMobile: true
        };
    }

    componentDidMount() {
        const deviceWidth = window.innerWidth;
        if(deviceWidth > 768) {
            this.setState({ isMobile: false});
        }
    }
  
    toggleHamburger = () => {
        let toggle = this.state.openHamburger;
        this.setState({openHamburger: !toggle});
    }

    render() {
        const { openHamburger, isMobile } = this.state;
        const { t } = this.props;
        const navItems = [
            { name: ROUTES.HOME.name, value: t('Menu.home')},
            { name: ROUTES.PRODUCTS.name, value: t('Menu.products')},
            { name: ROUTES.CLASSES.name, value: t('Menu.classes')},
            { name: ROUTES.SHIPPING.name, value: t('Menu.shipping')},
            { name: ROUTES.CLUB.name, value: t('Menu.club')},
            { name: ROUTES.EVENTS.name, value: t('Menu.events')}
            // { name: ROUTES.CONTACT.name, value: t('Menu.contact')}
        ];
        return (
            <nav className={`main-nav ${openHamburger ? 'showMenu' : 'hideMenu'}`}>
                <div className="main-nav__menu_wrapper">
                    <div className="main-nav__logo">
                        <NavLink to="/">
                            <img alt="silvia-peligro-icon" src={logo} />
                        </NavLink>
                    </div>
                    <span className="main-nav__hamburger" onClick={this.toggleHamburger}>
                        <i></i>
                        <i></i>
                    </span>   
                </div>
                
                <div className="nav-collapse">
                    <ul className="nav-collapse__list">
                        {navItems.map(item => {
                            return (
                                item.name === 'products' ? 
                                <UncontrolledDropdown nav inNavbar className="nav-collapse__item" key={item.name}>
                                    <DropdownToggle nav caret className="nav-collapse__link">
                                        <NavLink to={ROUTES.PRODUCTS.path} className="nav-collapse__link">
                                            {item.value}
                                        </NavLink>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink to={ROUTES.KITS.path} className="nav-collapse__link">
                                                {t('Menu.kits')}
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <NavLink to={ROUTES.FRAMES.path} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">
                                                {t('Menu.frames')}
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                :
                                <li className="nav-collapse__item" id={item.name} key={item.name}>
                                    <NavLink exact to={ROUTES[item.name.toUpperCase()].path} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">{item.value}</NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="nav-collapse__icons">
                        <a href="https://www.instagram.com/speligro/" target="_blank">
                            <img alt="instagram-icon" src={instagram} />
                        </a>
                        <a href="mailto:hola@silviapeligro.com">
                            <img alt="mail-icon" src={mail} />
                        </a>
                    </div>

                    <LanguageSelect/>
                </div>
            </nav>
        );
    }
}

export default  withTranslation('common') (FixedNavbar);