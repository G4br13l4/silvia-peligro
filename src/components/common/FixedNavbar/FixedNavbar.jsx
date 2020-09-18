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

import logo from './../../../assets/imgs/logo.jpg';
import instagram from './../../../assets/icons/instagram_white.png';
import mail from './../../../assets/icons/mail_white.png';
import LanguageSelect from '../LanguageSelect/LanguageSelect';

class FixedNavbar extends React.Component {
    constructor(props) {
        super(props);
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
            { id: 'home',value: t('Menu.home')},
            { id: 'products',value: t('Menu.products')},
            { id: 'classes', value: t('Menu.classes')},
            { id: 'shipping', value: t('Menu.shipping')},
            { id: 'club', value: t('Menu.club')},
            { id: 'events', value: t('Menu.events')},
            { id: 'contact', value: t('Menu.contact')}
        ];
        return (
            <nav className={`main-nav ${openHamburger ? 'showMenu' : 'hideMenu'}`}>
                <div className="main-nav__menu_wrapper">
                    <div className="main-nav__logo">
                        <img alt="silvia-peligro-icon" src={logo} />
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
                                item.id === 'products' ? 
                                <UncontrolledDropdown nav inNavbar className="nav-collapse__item">
                                    <DropdownToggle nav caret className="nav-collapse__link">
                                        {item.value}
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <NavLink to={"/products/kits"} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">Kits</NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            <NavLink to={"/products/frames"} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">Frames</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                :
                                <li className="nav-collapse__item" id={item.id} key={item.id}>
                                    <NavLink to={item.id} onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">{item.value}</NavLink>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="nav-collapse__icons">
                        <img alt="instagram-icon" src={instagram} />
                        <img alt="mail-icon" src={mail} />
                    </div>

                    <LanguageSelect/>
                </div>
            </nav>
        );
    }
}

export default  withTranslation('common') (FixedNavbar);