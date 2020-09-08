import React from 'react';
import './Button.scss';

export const Button = (props) => {
    return (
    <button className="btn-p"><span>{props.text}</span></button>
    );
}