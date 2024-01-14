import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import countries from "../../Countries/contries.json";
import styles from "./CollapsibleNavbar.module.css";
import { useTranslation } from 'react-i18next';
import React from 'react';
import Flag from 'react-world-flags';

export default function CollapsibleNavbar() {
  const { i18n, t } = useTranslation();
  const onChangeLang = (e) => {
    const lang_code = e.target.alt ? e.target.parentElement.id : e.target.id;
    i18n.changeLanguage(lang_code);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">{t("currencyConverter")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavDropdown title={t("selectLanguage")} id="dropdown-select-language">
              {countries.map(country => <NavDropdown.Item href="#" id={country.language} key={country.language} onClick={onChangeLang}><Flag code={country.country} alt={country.countryName} className={styles.icnFlag} /> {country.languageName}</NavDropdown.Item>)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
