import { useTranslation } from 'react-i18next'
import { AssistanceItem } from '../Home/components/Assistance/CircleText/AssistanceItem/AssistanceItem'


export const StatisticsList = () => {
    const {t} = useTranslation()
    return (
        <div className='assistance-item-list'>
            <AssistanceItem number='1'  text={t('statistics1')}/>
            <AssistanceItem number='2'  text={t('statistics2')}/>
            <AssistanceItem number='3'  text={t('statistics3')}/>
            <AssistanceItem number='4'  text={t('statistics4')}/>
            <AssistanceItem number='5'  text={t('statistics5')}/>
            <AssistanceItem number='6'  text={t('statistics6')}/>
        </div>
    )
}