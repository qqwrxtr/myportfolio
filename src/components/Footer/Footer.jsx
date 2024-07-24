import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <div className="container footer">
      <div className="row footer_row">
        <div className="col-12">
          <p className='footer_text'>{t("Footer_rights")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
