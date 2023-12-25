import { useTranslation } from "react-i18next"
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent"
import { ImgWithTitle } from "../../shared/ImgWithTitle/ImgWithTitle"
import { ProjectImages as images } from "./ProjectImages"
import './Projects.scss'
import { Footer } from "../../shared/Footer/Footer"
import { useEffect } from "react"

export const Projects = () => {
    const {t} = useTranslation()

    useEffect(() => {
        document.title = t('projects');
    }, [t]);

    return (
        <section className='wrapper-page project-page'>
            <h1><WordsAndLastComponent>{t('projects')}</WordsAndLastComponent></h1>
                <ImgWithTitle images={images}></ImgWithTitle>
            <Footer/>
        </section>
    )
}