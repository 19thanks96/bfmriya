import { useTranslation } from 'react-i18next'
import { MainBlockTextSection } from './MainBlockTextSection/MainBlockTextSection'
import './MainBlock.scss'
import { useEffect } from 'react';

export const MainBlock = () => {
    const {t} = useTranslation()

    useEffect(() => {
        document.title = t('main-first') + t('main-second');
    }, [t]);
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