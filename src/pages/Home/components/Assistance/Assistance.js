import { SecondTitle } from "../../../../shared/Title/SecondTitle"
import { AssistanceItemList } from "./CircleText/AssistanceItemList"


export const Assistance = () => {
    return (
        <>
            <SecondTitle 
            primary='Яку допомогу надає наш фонд?' 
            secondary='WHAT KIND OF ASSISTANCE DO WE PROVIDE?'
            />
            <AssistanceItemList/>
        </>
    )
}