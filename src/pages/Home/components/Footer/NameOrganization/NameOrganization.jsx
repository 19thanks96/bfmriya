import { useTranslation } from "react-i18next";
import { LinkTo } from "../../../../../shared/LinkTo/LinkTo";
import { Typography } from "../../../../../shared/Typography/Typography";
import './NameOrganization.scss'
export const NameOrganization = () => {
    const {t} = useTranslation()
    return(
    <>
        <Typography Tag='h4' variant='contacts'>
            {t(`slogan`)}
        </Typography>
        
        <LinkTo href={`mailto:bfmriya.ua@gmail.com`}>bfmriya.ua@gmail.com</LinkTo>
        <LinkTo href={`tel:+380973393661`}>+380973393661</LinkTo>
    </>
)}