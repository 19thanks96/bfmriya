import { useTranslation } from "react-i18next"
import { Typography } from "../../shared/Typography/Typography"
import { ImgWithTitle } from "../../shared/ImgWithTitle/ImgWithTitle"
import { ProjectImages as images } from "./ProjectImages"
import './Projects.scss'

export const Projects = () => {
    const {t} = useTranslation()

    return (
        <section className='wrapper-page project-page'>
            <Typography Tag='h1' variant='h2'>{t('projects')}</Typography>
                <ImgWithTitle images={images}></ImgWithTitle>
            
        </section>
    )
}