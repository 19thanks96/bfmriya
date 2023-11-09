import GoogleMap from "./GoogleMap";
import { InfoContacts } from "./InfoContacts/InfoContacts";
import './contacs.scss'
import { Footer } from "./Footer";
import { useTranslation } from "react-i18next";


export const Contacts = () => {
    const {t} = useTranslation()
    return(
        <section >
            <div className="wrapper-page">
                <div className="title">
                    {t('contactus')}
                </div>
                <div className="contacs">
                    <InfoContacts/>
                    <GoogleMap></GoogleMap>
                </div>
            </div>
            <Footer />
        </section>
    )
}