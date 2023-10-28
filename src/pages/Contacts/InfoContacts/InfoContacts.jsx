import { BlockInfoContats } from "./BlockInfoContacts";
import address from '../img/Address.png'
import mail from '../img/mail.png'
import phone from '../img/phone.png'
import { useTranslation } from "react-i18next";



export const InfoContacts = () => {
    const {t} = useTranslation()
    return(
    <>
        <BlockInfoContats src={address} alt='address' primary={t('address')} secondary={t('address text')} />
        <BlockInfoContats src={mail} alt='mail' primary={t('mail')} secondary='bfmriya.ua@gmail.com' type='mailto:'/>
        <BlockInfoContats src={phone} alt='phone' primary={t('call us')} secondary='+380973393661' type='tel:' />


    </>
)}