import { useTranslation } from "react-i18next";
import './Partners.scss'
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent";
import { Footer } from "../../shared/Footer/Footer";
import {partnersData} from '../../imgs/partners/partners.js'
import { useEffect } from "react";

function Partners() {
  const {t} = useTranslation()

  useEffect(() => {
    document.title = t('partners');
  }, [t]);

  return (
    <section className="partners wrapper-page">
      <h1>
        <WordsAndLastComponent>{t('partners')}</WordsAndLastComponent>
      </h1>
      <div className="all-partners">
        {partnersData.map((image) => (
          <div className={'partner'}>
            <div className='partners-job-title'>{t(image.name)}</div>
            <img src={image.image} width='200' alt={t(image.name)}/>
          </div>
        ))}
      </div>
      <Footer/>
    </section>
  );
}

export default Partners;
