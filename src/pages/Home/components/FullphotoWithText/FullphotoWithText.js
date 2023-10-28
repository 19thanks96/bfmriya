import { useTranslation } from "react-i18next"


export const FullphotoWithText = () => {
    const {t} = useTranslation()
    return <div>{t('mriya')}</div>
}