import React from 'react';
import './FixedNavbar.scss';

import logo from './../../../assets/imgs/logo.jpg';
import instagram from './../../../assets/icons/instagram_white.png';
import mail from './../../../assets/icons/mail_white.png';
import { LanguageSelect } from '../LanguageSelect/LanguageSelect';

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
                        {isMobile &&
                            <li className="nav-collapse__item">
                                <a href="#" onClick={this.toggleHamburger} className="nav-collapse__link">Inicio</a>
                            </li>
                        }
                        <li className="nav-collapse__item">
                            <a href="#" onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">Productos</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a href="#" onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">Clases en Línea</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a href="#" onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">Envíos</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a href="#" onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">Club de Bordado</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a href="#" onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">Eventos</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a href="#" onClick={isMobile ? this.toggleHamburger : null} className="nav-collapse__link">Contacto</a>
                        </li>
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

export default FixedNavbar;