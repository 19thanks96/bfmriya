import { FullSizeImg } from "../../../../shared/FullSizeImg/FullSizeImg";
import { ThirdTitle } from "../../../../shared/Title/ThirdTitle";
import { TranslatedTextSection } from "./TranslatedTextSection/TranslatedTextSection";
import { Button } from "../../../../shared/Button/Button";
import { PhotoDesk } from "./PhotoDesk/PhotoDesk";
import { useTranslation } from "react-i18next";
import './CharitableResult.scss'

export const CharitableResult = () => {
    const {t} = useTranslation()
    return(
    <section className="charitable-result">
        <ThirdTitle 
        secondary={t(`THE RESULT OF OUR CHARITABLE FOUNDATION'S ACTIVITIES`)}>
        </ThirdTitle>
        <TranslatedTextSection/>
        
        <PhotoDesk></PhotoDesk>
        <Button>{t('more photo')}</Button>
    </section>
)}