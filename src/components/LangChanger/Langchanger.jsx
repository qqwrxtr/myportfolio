import React, { useCallback } from "react";
import "../navbar/navbar.css";

const LanguageSelector = ({ className, selectedLanguage, onChangeLanguage }) => {
    const chooseLanguage = useCallback((e) => {
        e.preventDefault();
        onChangeLanguage(e.target.value);
    }, [onChangeLanguage]);

    const selectStyle = className === 'mobile' ? { display: 'none' } : { display: 'block' };

    return (
        <select
            value={selectedLanguage}
            onChange={chooseLanguage}
            className={`form-select ${className}`}
            style={selectStyle}
        >
            <option value="ro">Română</option>
            <option value="en">English</option>
            <option value="ru">Руский</option>
        </select>
    );
};

export default React.memo(LanguageSelector);
