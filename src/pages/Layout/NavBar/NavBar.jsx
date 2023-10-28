import { Link } from "../Link/Link";
import '../Link/Link.scss'
import logo from '../../../imgs/mria110-110.jpg'
import { NavItem } from "./NavItem";
import useLocalStorage from "../../../hooks/use-localstorage";
import i18n from "../../../i18n";
import  {useTranslation}  from "react-i18next";


export const NavBar = () => {
    const [language, setLanguage] = useLocalStorage('language', 'en')
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
    return(
    <nav  className="navbar">
        <img  src={logo} alt='logo'/>
        <button onClick={handleLanguageChange}>
                {language === 'ua' ? 'EN' : 'UA'}
        </button>
        <NavItem>
            <Link to="/">{t("who we are")}</Link>
        </NavItem>
        <NavItem>
            <Link to="/app">{t("Blogs")}</Link>
        </NavItem>
        <NavItem>
            <Link to="/contacts">{t("contacs")}</Link>
        </NavItem>
    </nav>
)}