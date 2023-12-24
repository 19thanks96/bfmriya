import { MyImageGallery } from "../../shared/ImageGallery/ImageGallery"
import { awardsImages } from "../../imgs/awards/awards"
import { acknowledgments } from "../../imgs/awards/awards"
import { useTranslation } from "react-i18next"
import './Awards.scss';
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent";
import { Footer } from "../../shared/Footer/Footer";
export const Awards = () => {
    const {t} = useTranslation()
    return (
        <section className="wrapper-page">
        <h1>
            <WordsAndLastComponent>{t('ourAwards')}</WordsAndLastComponent>
        </h1>
        <MyImageGallery images={awardsImages}/>
        <div className="award-link-wrapper">
            <div>
                <a href={acknowledgments.acknowledgment} target="_blank" className="button" rel="noopener noreferrer">{t('acknowledgment')}</a>
            </div>
            <div>
            <a href={acknowledgments.acknowledgment2} target="_blank" className="button" rel="noopener noreferrer">{t('acknowledgment')}</a>
            </div>
        </div>
        <Footer/>
        </section>
    )
}