import React from 'react';
import './Header.scss';
import background from './../../../assets/imgs/background.jpg';

interface Props {
    title: string;
    subtitle?: string;
    customClass?: string;
    customBackground?: Node;
}

export const Header = (props: Props) => {
    const { 
        title, 
        subtitle, 
        customClass, 
        customBackground 
    } = props;

    return (
        <header 
            style={{backgroundImage: `url(${customBackground ? customBackground : background})`}}
            className={`header ${customClass ? customClass : ''}`}>
            <h1>{title}</h1>
            { subtitle && <span>{subtitle}</span> }
        </header>
    );
}