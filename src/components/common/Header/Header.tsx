import React from 'react';
import './Header.scss';
import background from './../../../assets/imgs/background.jpg';

interface Props {
    title?: string;
    subtitle?: string;
    img?: any;
    customClass?: string;
    customBackground?: Node;
}

export const Header = (props: Props) => {
    const { 
        title, 
        subtitle, 
        img,
        customClass, 
        customBackground 
    } = props;

    return (
        <header 
            style={{backgroundImage: `url(${customBackground ? customBackground : background})`}}
            className={`header ${customClass ? customClass : ''}`}>
            { title && <h1>{title}</h1> }
            { subtitle && <span>{subtitle}</span> }
            { img && <img src={img}/>}
        </header>
    );
}