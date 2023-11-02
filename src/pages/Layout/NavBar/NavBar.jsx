import { Link } from "../Link/Link";
import '../Link/Link.scss'
import '../burger-menu.scss'
import React from "react";
import logo from '../../../imgs/mria110-110.jpg'
import { NavItem } from "./NavItem";
import useLocalStorage from "../../../hooks/use-localstorage";
import i18n from "../../../i18n";
import  {useTranslation}  from "react-i18next";
import { useState } from "react";
import { Link as RouterLink} from "react-router-dom";



export const NavBar = () => {
    const [language, setLanguage] = useLocalStorage('language', 'en')
    const [menuOpen, setMenuOpen] = useState(false);

    const {t} = useTranslation();
    const handleLanguageChange = () => {
        if(language === "en") {
            i18n.changeLanguage('ua')
            setLanguage('ua')
        }
        if(language === "ua") {
            i18n.changeLanguage('en')
            setLanguage('en')
        }
        
    }

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen); 
      }
    return(
    <nav  className="navbar">
            <RouterLink to="/"><img  src={logo} alt='logo' height='50px' width='50px'/></RouterLink>
        <div className="change-lang" onClick={handleLanguageChange}>
                {language === 'ua' ? 'EN' : 'UA'}
        </div>
        <div className={`header__menu__menu ${menuOpen ? '_active' : ''}`} onClick={toggleMobileMenu}>
            <div className={`menu__icon ${menuOpen ? '_active' : ''}`}>
                <span></span>
            </div>
            <nav className={`menu__body ${menuOpen ? '_active' : ''}`}>
                <NavItem>
                    <Link to="/">{t("who we are")}</Link>
                </NavItem>
                <NavItem>
                    <Link to="/volunteers">{t("ourvolunteers")}</Link>
                </NavItem>
                <NavItem>
                    <Link to="/contacts">{t("contacs")}</Link>
                </NavItem>
            </nav>
        </div>
    </nav>
)}