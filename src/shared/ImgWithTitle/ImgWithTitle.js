import { useTranslation } from 'react-i18next'
import { ButtonToAnotherSite } from '../Button/ButtonAnotherSite'
import './ImgWithTitle.scss'

export const ImgWithTitle = ({images}) => {
    const {t} = useTranslation()
    return(
        <div className='ImgWithTitle'>
        {images.map((image) => (
            <div className="img-with-title">
                {image.projectDescription.map((text) => (
                    <div className={text}>{t(text)}</div>
                ))}
                <img key={image.text} src={image.src} alt={image.alt} className='fullphoto'/>
                {<ButtonToAnotherSite href={image.href}>{t('Donate')}</ButtonToAnotherSite>}
            </div>
        ))}
        </div>
    )
}