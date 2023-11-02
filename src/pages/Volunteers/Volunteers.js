import { useTranslation } from "react-i18next";
import { VolunteersSection } from "./VolunteersSection";
import ivan from './img/ivan.jpg'
import nastia from './img/nastia.jpg'
import sasha from './img/sasha.jpg'
import './volunteers.scss'

function Volunteers() {
  const {t} = useTranslation()
  return (
    <section className="volunteers wrapper-page">
      <div className="title-volunteers">{t('ourvolunteers')}</div>
      <div className='all-volunteers'>
        <VolunteersSection src={sasha} alt={t('director')} primary={t('director')} secondary={t('sasha')}/>
        <VolunteersSection src={nastia} alt={t('ddirector')} primary={t('ddirector')} secondary={t('nastia')}/>
        <VolunteersSection src={ivan} alt={t('ithead')} primary={t('ithead')} secondary={t('ivan')}/>
        </div>
    </section>
  );
}

export default Volunteers;
