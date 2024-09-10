import React, { useCallback, useEffect, useState } from "react";
import i18n from "../../i18n/index.jsx"; 
import "../navbar/navbar.css";

const LanguageSelector = ({ className }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.resolvedLanguage || "en");

  const handleLanguageChange = useCallback(
    (e) => {
      const selectedLang = e.target.value;
      i18n.changeLanguage(selectedLang);
      setSelectedLanguage(selectedLang);
    },
    [setSelectedLanguage]
  );

  useEffect(() => {
    const syncLanguage = () => setSelectedLanguage(i18n.resolvedLanguage || "en");

    syncLanguage();

    i18n.on("languageChanged", syncLanguage);

    return () => {
      i18n.off("languageChanged", syncLanguage);
    };
  }, []);

  return (
    <select
      value={selectedLanguage}
      onChange={handleLanguageChange}
      className={`form-select ${className}`}
      style={{ display: className === "mobile" ? "none" : "block" }}
      aria-label="Select language"
    >
      <option value="ro">Română</option>
      <option value="en">English</option>
      <option value="ru">Русский</option>
    </select>
  );
};

export default React.memo(LanguageSelector);
