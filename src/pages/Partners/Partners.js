import { useTranslation } from "react-i18next";
import { PartnersSection } from "./PartnersSection";
import './Partners.scss'

function Partners() {
  const {t} = useTranslation()
  return (
    <section className="partners wrapper-page">
      <div className="title-partners">{t('partners')}</div>
      <div className='all-partners'>

        </div>
    </section>
  );
}

export default Partners;
