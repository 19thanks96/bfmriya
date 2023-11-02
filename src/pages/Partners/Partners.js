import { useTranslation } from "react-i18next";
import { PartnersSection } from "./PartnersSection";
import './Partners.scss'

function Partners() {
  const {t} = useTranslation()
  return (
    <section className="partners wrapper-page">
      <div className="title-partners">{t('partners')}</div>
      <div className='all-partners'>
        {/*<VolunteersSection src={sasha} alt={t('director')} primary={t('director')} secondary={t('sasha')}/>
        <VolunteersSection src={nastia} alt={t('ddirector')} primary={t('ddirector')} secondary={t('nastia')}/>
        <VolunteersSection src={ivan} alt={t('ithead')} primary={t('ithead')} secondary={t('ivan')}/>*/}
        </div>
    </section>
  );
}

export default Partners;
