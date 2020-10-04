import React from 'react';
import './CardsContainer.scss';

export const CardsContainer = props => {
    const { children } = props;

    return (
        <div className="cards-container">
            {children}
        </div>
    );
}