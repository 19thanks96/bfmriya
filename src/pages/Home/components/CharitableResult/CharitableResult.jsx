import { FullSizeImg } from "../../../../shared/FullSizeImg/FullSizeImg";
import { ThirdTitle } from "../../../../shared/Title/ThirdTitle";
import { TranslatedTextSection } from "./TranslatedTextSection/TranslatedTextSection";
import foto from '../../../../imgs/mriaText-300x300.jpg'
import { Button } from "../../../../shared/Button/Button";
import { PhotoDesk } from "./PhotoDesk/PhotoDesk";
import { useTranslation } from "react-i18next";

export const CharitableResult = () => {
    const {t} = useTranslation()
    return(
    <>
        <ThirdTitle 
        secondary={t(`THE RESULT OF OUR CHARITABLE FOUNDATION'S ACTIVITIES`)}>
        </ThirdTitle>
        <TranslatedTextSection/>
        <FullSizeImg src={foto} alt='slogan of Ukraine volunteers'/>
        <Button>{t('more photo')}</Button>
        <PhotoDesk></PhotoDesk>
    </>
)}