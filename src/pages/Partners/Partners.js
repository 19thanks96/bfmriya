import { useTranslation } from "react-i18next";
import { PartnersSection } from "./PartnersSection";
import './Partners.scss'
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent";
import { Footer } from "../../shared/Footer/Footer";
import {partnersData} from '../../imgs/partners/partners.js'
function Partners() {
  const {t} = useTranslation()
  console.log(partnersData)
  return (
    <section className="partners wrapper-page">
      <WordsAndLastComponent>{t('partners')}</WordsAndLastComponent>
      <div className="all-partners">
        {partnersData.map((image, index) => (
          <div className={'partner'}>
            <div className='partners-job-title'>{t(image.name)}</div>
            <img src={image.image} width='200' />
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  );
}

export default Partners;
