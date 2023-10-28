import { useTranslation } from "react-i18next"
import { SecondTitle } from "../../../../shared/Title/SecondTitle"
import { AssistanceItemList } from "./CircleText/AssistanceItemList"


export const Assistance = () => {
    const {t} = useTranslation()
    return (
        <>
            <SecondTitle 
            primary={t('WHAT KIND OF ASSISTANCE DO WE PROVIDE')}/>
            <AssistanceItemList/>
        </>
    )
}