import { useEffect } from "react";
import { useTranslation } from "react-i18next"
import './congratulation.scss'

export const Congratulation = () => {
    const {t} = useTranslation()
    useEffect(() => {
        document.title = t('congratulation');
    }, [t]);
    return (
        <section className="wrapper-page">
            <h1>
                <div className="payment-success">{t('payment')}</div>
            </h1>
            <div className="congratulation">{t('congratulation')}</div>
        </section>
    )
}