import { useTranslation } from 'react-i18next'
import './TranslatedTextSection.scss'

export const TranslatedTextSection = () => {
    const {t} = useTranslation()
    return(
    <>
        <div className="primary-text-tranlated-text-section">
            {t(`THESE ARE THOUSANDS OF WORDS OF THANKS`)}
        </div>
        
    </>
)}