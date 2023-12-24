import GoogleMap from "./GoogleMap";
import { InfoContacts } from "./InfoContacts/InfoContacts";
import './contacs.scss'
import { Footer } from "./Footer";
import { useTranslation } from "react-i18next";
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent";


export const Contacts = () => {
    const {t} = useTranslation()
    return(
        <section >
            <div className="wrapper-page">
                <h1>
                    <WordsAndLastComponent>
                        {t('contactus')}
                    </WordsAndLastComponent>
                </h1>
                <div className="contacs">
                    <InfoContacts/>
                    <GoogleMap></GoogleMap>
                </div>
            </div>
            <Footer />
        </section>
    )
}