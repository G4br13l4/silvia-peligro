import React from 'react';
import './LanguageSelect.scss';

export const LanguageSelect = () => {

    const options = [{name: "English", id: "en"}, {name: "Español", id: "es"}];

    return (
        <select
            className="lang-select"
            //onChange={e => changeLanguage(e.target.value)}
            //value={langState}
            name="lang"
        >
            {options.map((option, i) => {
                return (
                    <option key={i} value={option.id}>
                        {option.name}
                    </option>
                );
            })}
        </select>
    );
}