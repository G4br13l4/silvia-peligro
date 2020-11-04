import React from 'react';
import './Button.scss';

interface Props {
    text: string;
    customClass?: string;
}

export const Button = (props: Props) => {
    const { text, customClass } = props;

    return (
        <button 
            className={`sp-btn ${customClass ? customClass : ''}`}
        ><span>{text}</span></button>
    );
}