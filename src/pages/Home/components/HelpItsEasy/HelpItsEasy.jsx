import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import './HelpItsEasy.scss'
import { TranslatedTextSectionOnPhoto } from './TranslatedTextSection/TranslatedTextSection'

export const HelpItsEasy = () => {
    const {t} = useTranslation()
    return (
    <section className="wrapper-for-phototext">
        <div className='photo'>
            <TranslatedTextSectionOnPhoto 
            primary={t('GIVE A HAND TO THOSE WHO REALLY NEED HELP')} 
            secondary={t('HELPING UKRAINIANS IS EASY')}/>
        </div>
    </section>
)}