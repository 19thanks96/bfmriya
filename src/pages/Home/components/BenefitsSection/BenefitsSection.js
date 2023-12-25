import { Benefit } from "./Benefit/Benefit"
import informationImg from './Benefit/imgs/information.png'
import trophyImg from './Benefit/imgs/trophy.png'
import handshakeImg from './Benefit/imgs/handshake-heart.png'
import { useTranslation } from "react-i18next"


export const BenefitsSection = () => {
    const {t} = useTranslation()
    return (
        <section className="benefits-section">
            <Benefit src={informationImg} 
            alt='information' 
            upperText={t('Openness')}
            lowerText={t('To help all Ukrainians')}
            />

            <Benefit src={trophyImg}
            alt='trophy'
            upperText={t('Transparency')}
            lowerText={t('Transparent and honest')}
            />

            <Benefit src={handshakeImg}
            alt='handshake-heart'
            upperText={t('Efficiency')}
            lowerText={t('Fast as the wind')}
            />
        </section>
    )
}