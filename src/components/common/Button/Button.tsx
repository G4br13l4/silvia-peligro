import React from 'react';
import './Button.scss';

interface Props {
    text: string;
    customClass?: string;
}

export const Button = (props: Props) => {
    const { text, customClass } = props;

    return (
        <button className={`btn-p ${customClass ? customClass : ''}`}><span>{props.text}</span></button>
    );
}