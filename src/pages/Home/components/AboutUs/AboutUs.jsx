import { useTranslation } from "react-i18next";
import { Typography } from "../../../../shared/Typography/Typography";
import { AboutUsTextComponent } from "./AboutUsTextComponent/AboutUsTextComponent";

export const AboutUs = () => {
    const {t} = useTranslation()
    return(
    <section>
        <Typography Tag='h2' variant='wrapper-third-title-primary'>{t(`ABOUT THE INTERNATIONAL CHARITABLE FOUNDATION 'MRIYA UA'`)}</Typography>
        <AboutUsTextComponent/>
    </section>
)}