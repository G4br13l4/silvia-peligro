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
import { ROUTES, NAV_ITEMS } from '../../../routes';

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
                        {NAV_ITEMS.map(item => {
                            return (
                                item.id === 'products' ? 
                                <UncontrolledDropdown nav inNavbar className="nav-collapse__item" key={item.id}>
                                    <DropdownToggle nav caret className="nav-collapse__link">
                                        {t(`Menu.${item.id}`)} 
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem className="nav-dropdown">
                                            <NavLink exact to={ROUTES.PRODUCTS.path} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">
                                                {t('Menu.all')}
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem className="nav-dropdown">
                                            <NavLink to={ROUTES.KITS.path} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">
                                                {t('Menu.kits')}
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem className="nav-dropdown">
                                            <NavLink to={ROUTES.FRAMES.path} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">
                                                {t('Menu.frames')}
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                : item.id === 'shipping' ?
                                <UncontrolledDropdown nav inNavbar className="nav-collapse__item" key={item.id}>
                                    <DropdownToggle nav caret className="nav-collapse__link">
                                        {t(`Menu.${item.id}`)} 
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem className="nav-dropdown">
                                            <NavLink exact to={ROUTES.SHIPPING.path} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">
                                                {t('Menu.all')}
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem className="nav-dropdown">
                                            <NavLink to={ROUTES.LOCAL_SHIPPING.path} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">
                                                {t('Menu.local')}
                                            </NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem className="nav-dropdown">
                                            <NavLink to={ROUTES.NATIONAL_SHIPPING.path} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">
                                                {t('Menu.national')}
                                            </NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                :
                                <li className="nav-collapse__item" id={item.id} key={item.id}>
                                    <NavLink exact to={ROUTES[item.id.toUpperCase()].path} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">{t(`Menu.${item.id}`)} </NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="nav-collapse__icons">
                        <a href={process.env.REACT_APP_INSTA_LINK_SP} target="_blank">
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