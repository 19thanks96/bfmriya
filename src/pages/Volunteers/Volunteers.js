import { useTranslation } from "react-i18next";
import './volunteers.scss'
import  images from "../../imgs/volunteers/Volunteers.img.js";
import { WordsAndLastComponent } from "../../shared/Title/WordsAndLastComponent";
import { Footer } from "../../shared/Footer/Footer";
import { useEffect } from "react";

function Volunteers() {
  const {t} = useTranslation()
  const imageKeys = Object.keys(images);

  useEffect(() => {
    document.title = t('ourvolunteers');
  }, [t]);
  
  return (
    <section className="volunteers wrapper-page">
      <h1>
        <WordsAndLastComponent>{t('ourvolunteers')}</WordsAndLastComponent>
      </h1>
      <div className='all-volunteers'>
      {imageKeys.map((key) => (
        <img key={key} src={images[key]} alt={`Volunteer ${key}`} className='volunteer-obj'/>
      ))}
        </div>
        <Footer/>
    </section>
  );
}

export default Volunteers;
