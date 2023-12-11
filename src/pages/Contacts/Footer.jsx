import ofertaUa from '../../shared/offerta-ua.pdf'
import ofertaEn from '../../shared/offerta-en.pdf'
import useLocalStorage from "../../hooks/use-localstorage.js";
import inst from '../../imgs/svg/instagram_black_logo_icon_147122.svg'
import tg from '../../imgs/svg/telegram_logo_icon_144811.svg'
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const {t} = useTranslation()
    const [language] = useLocalStorage('language');
    
    return(
        <section className='footer-contacts'>
            <a href='https://t.me/bfmriya_ua' target="_blank" rel="noopener noreferrer">
                <img src={tg} alt="telegram icon" width='50px'/>
            </a>
            <a href={language === 'ua' ? ofertaUa : ofertaEn} target="_blank" className="offert" rel="noopener noreferrer">
                <div className='button'>{t('offerta')}</div>
                </a>
            <a href='https://instagram.com/fond.mriya.ua?igshid=YmMyMTA2M2Y=' target="_blank" rel="noopener noreferrer">
                <img src={inst} alt="instagram icon" width='50px'/>
            </a>

        </section>
    )
}