import React from 'react';
import './Card.scss';

interface Props {
    background: Node;
    children: Node;
    customClass?: string;
}

export const Card = (props: Props) => {
    const { background, customClass, children } = props;

    return (
        <div className={`sp-card ${customClass ? customClass : ''}`} style={{backgroundImage: `url(${background})`}}>
            <div className="info">
               {children}
            </div>
        </div>
    );
}
