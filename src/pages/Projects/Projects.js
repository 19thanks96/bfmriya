import { useTranslation } from "react-i18next"
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent"
import { ImgWithTitle } from "../../shared/ImgWithTitle/ImgWithTitle"
import { ProjectImages as images } from "./ProjectImages"
import './Projects.scss'

export const Projects = () => {
    const {t} = useTranslation()

    return (
        <section className='wrapper-page project-page'>
            <WordsAndLastComponent>{t('projects')}</WordsAndLastComponent>
                <ImgWithTitle images={images}></ImgWithTitle>
            
        </section>
    )
}