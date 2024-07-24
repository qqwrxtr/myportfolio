import React from "react";
import "../navbar/navbar.css";

const LanguageSelector = ({ className, selectedLanguage, onChangeLanguage }) => {
    const chooseLanguage = (e) => {
        e.preventDefault();
        onChangeLanguage(e.target.value);
    }

    return (
        <select
            value={selectedLanguage}
            onChange={chooseLanguage}
            className={`form-select ${className}`}
            style={{ display: className === 'mobile' ? 'none' : 'block' }}
        >  
            <option value="ro">Română</option>
            <option value="en">English</option>
            <option value="ru">Руский</option>
        </select>
    );
};

export default LanguageSelector;
