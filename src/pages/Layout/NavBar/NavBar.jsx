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
                {t('change to')}{' '}
                {language === 'ua' ? t('english') : t('ukrainian')}
            </button>
        <NavItem>
            <Link to="/">Хто ми</Link>
        </NavItem>
        <NavItem>
            <Link to="/app">Blogs</Link>
        </NavItem>
        <NavItem>
            <Link to="/contacts">Контакти</Link>
        </NavItem>
    </nav>
)}