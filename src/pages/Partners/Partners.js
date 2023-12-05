import { useTranslation } from "react-i18next";
import { PartnersSection } from "./PartnersSection";
import './Partners.scss'
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent";

function Partners() {
  const {t} = useTranslation()
  return (
    <section className="partners wrapper-page">
      <WordsAndLastComponent>{t('partners')}</WordsAndLastComponent>
      <div className='all-partners'>
      <h3>Список партнерів та благодійників:</h3>
      <ul>
    <li>Нова пошта</li>
    <li>Уклон</li>
    <li>Ашан</li>
    <li>Fizzi</li>
    <li>World central kitchen</li>
    <li>БФ Петелька добра</li>
    <li>Студія D.O. Arts</li>
    <li>UNF</li>
    <li>БФ Фонд Маша</li>
    <li>Фундація дім рональда макдональда</li>
    <li>Мультіплекс</li>
    <li>Фотостудія Інлайт</li>
    <li>БФ «Одісей Черкаси»</li>
    <li>БФ «МРІЮ ЖИТИ»</li>
    <li>БФ «ПОРЯД Юкрейн»</li>
</ul>

        </div>
    </section>
  );
}

export default Partners;
