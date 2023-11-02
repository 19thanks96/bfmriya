import ofertaUa from '../../shared/offerta-ua.pdf'
import ofertaEn from '../../shared/offerta-en.pdf'
import useLocalStorage from "../../hooks/use-localstorage.js";
import inst from '../../imgs/svg/instagram_black_logo_icon_147122.svg'
import tg from '../../imgs/svg/telegram_logo_icon_144811.svg'

export const Footer = () => {
    const [language] = useLocalStorage('language');
    
    return(
        <section className='footer-contacts'>
            <a href='https://t.me/bfmriya_ua' target="_blank" rel="noopener noreferrer">
                <img src={tg} alt="telegram icon" width='50px'/>
            </a>
            <a href={language === 'ua' ? ofertaUa : ofertaEn} target="_blank" className="underline" rel="noopener noreferrer">Оферта</a>
            <a href='https://instagram.com/fond.mriya.ua?igshid=YmMyMTA2M2Y=' target="_blank" rel="noopener noreferrer">
                <img src={inst} alt="instagram icon" width='50px'/>
            </a>

        </section>
    )
}