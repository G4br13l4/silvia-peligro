import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelect.scss';

const LanguageSelect = props => {
    const { t, i18n } = useTranslation('common');
    const lang = localStorage.getItem('i18nextLng');
    const options = [{name: "EN", id: "en"}, {name: "ES", id: "es"}];

    const changeLanguage = lang => {
        i18n.changeLanguage(lang);
    }

    return (
        <select
            className="lang-select"
            onChange={e => changeLanguage(e.target.value)}
            value={lang}
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

export default  LanguageSelect;