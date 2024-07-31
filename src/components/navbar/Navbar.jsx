import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from '../LangChanger/Langchanger';
import { useTranslation } from 'react-i18next';
import i18n from './../../i18n/index.jsx';
import teodor_logo from "./../../assets/img/Teodor_Logo.png";
import teodor_logo_mobile from "./../../assets/img/Teodor_logo_mobile.svg";
import './navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const handleNavClick = useCallback((page) => {
    setActivePage(page);
  }, []);

  const handleLanguageChange = useCallback((language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  }, []);

  return (
    <div className="container pt-2 bg-all mb-2">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="firstpart">
            <Link className="navbar-brand" to="/" onClick={() => handleNavClick('/')}>
              <img src={teodor_logo} alt='Logo' className='img-fluid' />
            </Link>
            <Link className="navbar-phone" to="/" onClick={() => handleNavClick('/')}>
              <img src={teodor_logo_mobile} alt='Logo' className='img-fluid' />
            </Link>
            <div className="butt_lang">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                style={{ backgroundColor: "white" }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <LanguageSelector className="mobile" selectedLanguage={selectedLanguage} onChangeLanguage={handleLanguageChange} />
            </div>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {['/', '/about', '/projects', '/contact'].map((path) => (
                <NavItem 
                  key={path}
                  to={path}
                  activePage={activePage}
                  handleNavClick={handleNavClick}
                  label={t(`Nav_${path.slice(1)}`)}
                />
              ))}
              <li>
                <LanguageSelector selectedLanguage={selectedLanguage} onChangeLanguage={handleLanguageChange} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavItem = React.memo(({ to, activePage, handleNavClick, label }) => (
  <li className="nav-item">
    <Link
      className={`nav-link ${activePage === to ? 'active' : ''}`}
      to={to}
      onClick={() => handleNavClick(to)}
    >
      {label}
    </Link>
  </li>
));

export default Navbar;
