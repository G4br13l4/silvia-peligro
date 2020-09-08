import React from 'react';
import './LanguageSelect.scss';
import { withTranslation } from 'react-i18next';

const LanguageSelect = (props) => {
    const lang = localStorage.getItem('i18nextLng');
    const options = [{name: "English", id: "en"}, {name: "Español", id: "es"}];

    const changeLanguage = (lang) => {
        const { i18n } = props;
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

export default  withTranslation('common') (LanguageSelect);