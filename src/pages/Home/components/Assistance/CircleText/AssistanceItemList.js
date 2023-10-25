import { AssistanceItem } from './AssistanceItem/AssistanceItem'

export const AssistanceItemList = () => {
    return (
        <>
            <AssistanceItem number='1' primary='ПРОДУКТИ ХАРЧУВАННЯ' secondary='FOOD'/>
            <AssistanceItem number='2' primary='ЗАСОБИ ГІГІЄНИ' secondary='HYGIENE PRODUCTS'/>
            <AssistanceItem number='3' primary='ЛІКИ' secondary='MEDICINE'/>
            <AssistanceItem number='4' primary='ОДЯГ' secondary='CLOTHES'/>
            <AssistanceItem number='5' primary='ТОВАРИ ВІЙСЬКОВОГО ПРИЗНАЧЕННЯ' secondary='MILITARY GOODS'/>
            <AssistanceItem number='6' primary='ПСИХОЛОГІЧНА ДОПОМОГА' secondary='PSYHOLOGICAL ASSISTANCE'/>
        </>
    )
}