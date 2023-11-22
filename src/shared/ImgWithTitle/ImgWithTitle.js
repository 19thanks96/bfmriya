import { useTranslation } from 'react-i18next'
import { Button } from '../Button/Button'
import './ImgWithTitle.scss'

export const ImgWithTitle = ({images}) => {
    const {t} = useTranslation()

    return(
        <div>
        {images.map((image) => (
            <div className="img-with-title">
                {<div>{t(image.text)}</div>}
                {<div>{t(image.projectDescription)}</div>}
                <img key={image.text} src={image.src} alt={image.alt} className='fullphoto'/>
                {<Button href={image.href}>{t('Donate')}</Button>}
            </div>
        ))}
        </div>
    )
}