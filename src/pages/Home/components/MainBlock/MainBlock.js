import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { MainBlockTextSection } from './MainBlockTextSection/MainBlockTextSection'
import './MainBlock.scss'

export const MainBlock = () => {
    const {t} = useTranslation()
    return (
    <section className="wrapper-for-phototext">
        <div className='main-photo'>
            <MainBlockTextSection 
            primary={t('main-first')} 
            secondary={t('main-second')}
            thierd={t('main-pc')} />
        </div>
    </section>
)}