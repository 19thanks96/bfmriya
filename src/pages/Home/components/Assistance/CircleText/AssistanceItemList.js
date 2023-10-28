import { useTranslation } from 'react-i18next'
import { AssistanceItem } from './AssistanceItem/AssistanceItem'

export const AssistanceItemList = () => {
    const {t} = useTranslation()
    return (
        <>
            <AssistanceItem number='1'  secondary={t('FOOD')}/>
            <AssistanceItem number='2'  secondary={t('HYGIENE PRODUCTS')}/>
            <AssistanceItem number='3'  secondary={t('MEDICINE')}/>
            <AssistanceItem number='4'  secondary={t('CLOTHES')}/>
            <AssistanceItem number='5'  secondary={t('MILITARY GOODS')}/>
            <AssistanceItem number='6'  secondary={t('PSYHOLOGICAL ASSISTANCE')}/>
        </>
    )
}