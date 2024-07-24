import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageSelector from '../LangChanger/Langchanger';
import { useTranslation } from 'react-i18next';
import './navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <div className="firstpart">
                <Link className="navbar-brand" to="/" onClick={() => handleNavClick('/')}>Logo</Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav d-flex align-items-center">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePage === '/' ? 'active' : ''}`}
                      to="/"
                      onClick={() => handleNavClick('/')}
                    >
                      {t('Nav_Home')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePage === '/about' ? 'active' : ''}`}
                      to="/about"
                      onClick={() => handleNavClick('/about')}
                    >
                      {t('Nav_Abtme')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePage === '/projects' ? 'active' : ''}`}
                      to="/projects"
                      onClick={() => handleNavClick('/projects')}
                    >
                      {t('Nav_proj')}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${activePage === '/contact' ? 'active' : ''}`}
                      to="/contact"
                      onClick={() => handleNavClick('/contact')}
                    >
                      {t('Nav_contact')}
                    </Link>
                  </li>
                  <li>
                    <LanguageSelector />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
