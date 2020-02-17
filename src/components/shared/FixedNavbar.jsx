import React from 'react';
import logo from './../../assets/imgs/logo.jpg';
import instagram from './../../assets/icons/instagram_white.png';
import mail from './../../assets/icons/mail_white.png';

class FixedNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openHamburger: false
        };
    }
  
    toggleHamburger = () => {
        let toggle = this.state.openHamburger;
        this.setState({openHamburger: !toggle});
    }

    render() {
        const { openHamburger } = this.state;
        return (
            <nav className={`main-nav ${openHamburger ? 'showMenu' : 'hideMenu'}`}>
                <div className="main-nav__wrap-hamburger">
                    <div className="main-nav__logo">
                        <img src={logo} />
                    </div>
                    <span className="main-nav__hamburger" onClick={this.toggleHamburger}>
                        <i></i>
                        <i></i>
                    </span>   
                </div>
                
                <div className="nav-collapse">
                    <ul className="nav-collapse__list">
                        <li className="nav-collapse__item">
                            <a className="nav-collapse__link">Inicio</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a className="nav-collapse__link">Productos</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a className="nav-collapse__link">Clases en Línea</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a className="nav-collapse__link">Envíos</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a className="nav-collapse__link">Club de Bordado</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a className="nav-collapse__link">Eventos</a>
                        </li>
                        <li className="nav-collapse__item">
                            <a className="nav-collapse__link">Contacto</a>
                        </li>
                    </ul>
                    <div className="nav-collapse__icons">
                        <img src={instagram} />
                        <img src={mail} />
                    </div>
                </div>
            </nav>
        );
    }
}

export default FixedNavbar;