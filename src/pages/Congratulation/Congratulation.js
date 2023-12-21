import { useTranslation } from "react-i18next"
import './congratulation.scss'

export const Congratulation = () => {
    const {t} = useTranslation()
    return (
        <section className="wrapper-page">
            <div className="payment-success">{t('payment')}</div>
            <div className="congratulation">{t('congratulation')}</div>
        </section>
    )
}