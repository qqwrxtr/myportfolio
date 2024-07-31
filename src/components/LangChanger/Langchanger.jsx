import React, { useCallback } from "react";
import "../navbar/navbar.css";

const LanguageSelector = ({ className, selectedLanguage, onChangeLanguage }) => {
    const chooseLanguage = useCallback((e) => {
        e.preventDefault();
        onChangeLanguage(e.target.value);
    }, [onChangeLanguage]);

    return (
        <select
            value={selectedLanguage}
            onChange={chooseLanguage}
            className={`form-select ${className}`}
            style={{ display: className === 'mobile' ? 'none' : 'block' }}
            aria-label="Select language"
        >
            <option value="ro">Română</option>
            <option value="en">English</option>
            <option value="ru">Русский</option>
        </select>
    );
};

export default React.memo(LanguageSelector);
