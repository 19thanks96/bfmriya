import { useTranslation } from "react-i18next"
import { Footer } from "../../shared/Footer/Footer"
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent"
import { StatisticsList } from "./StatisticsList"

export const Statistics = () => {
    const {t} = useTranslation()
    return (
        <section className="statistics wrapper-page">
            <WordsAndLastComponent>{t('statistics')}</WordsAndLastComponent>
            <StatisticsList/>
            <Footer/>
        </section>
    )
}