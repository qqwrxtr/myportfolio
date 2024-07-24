import React, {useState} from "react";
import i18n from './../../i18n/index.jsx';

import "../navbar/navbar.css"
const LanguageSelector = () => {
    
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   
        setSelectedLanguage(e.target.value);
    }

    return (
        <select defaultValue={selectedLanguage} onChange={chooseLanguage} className="form-select">  
            <option value="ro">Romana</option>
            <option value="en">English</option>
            <option value="ru">Руский</option>
        </select>
    );
};

export default LanguageSelector;