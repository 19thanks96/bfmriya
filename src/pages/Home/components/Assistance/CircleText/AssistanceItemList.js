import { useTranslation } from 'react-i18next'
import { AssistanceItem } from './AssistanceItem/AssistanceItem'

export const AssistanceItemList = () => {
    const {t} = useTranslation()
    return (
        <div className='assistance-item-list'>
            <AssistanceItem number='1'  text={t('FOOD')}/>
            <AssistanceItem number='2'  text={t('HYGIENE PRODUCTS')}/>
            <AssistanceItem number='3'  text={t('MEDICINE')}/>
            <AssistanceItem number='4'  text={t('CLOTHES')}/>
            <AssistanceItem number='5'  text={t('MILITARY GOODS')}/>
            <AssistanceItem number='6'  text={t('PSYHOLOGICAL ASSISTANCE')}/>
        </div>
    )
}