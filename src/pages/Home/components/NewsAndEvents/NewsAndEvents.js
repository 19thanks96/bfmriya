import { useTranslation } from "react-i18next"
import { Button } from "../../../../shared/Button/Button"
import { Title } from "../../../../shared/Title/Title"
import { MyGallery } from "./MyGallery"

export const NewsAndEvents = () => {
    const {t} = useTranslation()
    return (
        <section>
        <Title primary={t('news and')} secondary={t('events')}/>
        <MyGallery/>
        <Button>{t('more')}</Button>
        </section>
    )
}