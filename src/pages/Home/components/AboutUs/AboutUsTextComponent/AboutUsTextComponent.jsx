import { useTranslation } from 'react-i18next'
import './AboutUsTextComponent.scss'

export const AboutUsTextComponent = () => {
    const {t} = useTranslation()
    return (
    <>
        <div className='About-Us-Text-Component'>
            <div className=''>
            {t(`TextAbout`)}
            </div>
            <div className='last-words-about-us'>
               {t(`text about second section`)}
            </div>
        </div>
    </>
)}