import React, { useCallback, useEffect, useState } from "react";
import i18n from "../path/to/i18n";
import "../navbar/navbar.css";

const LanguageSelector = ({ className }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language || "en");

  const handleLanguageChange = useCallback(
    (e) => {
      const selectedLang = e.target.value;
      i18n.changeLanguage(selectedLang);
      setSelectedLanguage(selectedLang);
    },
    [setSelectedLanguage]
  );

  useEffect(() => {
    const changeHandler = (lng) => setSelectedLanguage(lng);
    i18n.on("languageChanged", changeHandler);

    return () => {
      i18n.off("languageChanged", changeHandler);
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
