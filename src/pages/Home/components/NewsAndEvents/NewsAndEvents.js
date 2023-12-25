import { useTranslation } from "react-i18next"
import { Button } from "../../../../shared/Button/Button"
import { WordsAndLastComponent } from "../../../../shared/Title/WordsAndLastComponent"
import { MyGallery } from "./MyGallery"

export const NewsAndEvents = () => {
    const {t} = useTranslation()
    return (
        <section>
            <WordsAndLastComponent>{t('news and')}</WordsAndLastComponent>
        <MyGallery/>
        <Button href='/projects'>{t('more')}</Button>
        </section>
    )
}