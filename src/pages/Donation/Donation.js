
import { useTranslation } from "react-i18next";
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent";
import "./donation.scss";
import { PayPal } from "./PayPal";

export const Donation = () => {
    const {t} = useTranslation();
    return (
        <section className='wrapper-page donation-page'>
            <h1>
                <WordsAndLastComponent>
                    {t('Donate')}
                </WordsAndLastComponent>
            </h1>
            <PayPal />
        </section>
    )
}