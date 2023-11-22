import { useTranslation } from "react-i18next";
import { VolunteersSection } from "./VolunteersSection";
import './volunteers.scss'
import  images from "../../imgs/volunteers/Volunteers.img.js";
import { Typography } from "../../shared/Typography/Typography";

function Volunteers() {
  const {t} = useTranslation()
  const imageKeys = Object.keys(images);

  return (
    <section className="volunteers wrapper-page">
      <Typography variant="h2" Tag='h2'>{t('ourvolunteers')}</Typography>
      <div className='all-volunteers'>
      {imageKeys.map((key) => (
        <img key={key} src={images[key]} alt={`Volunteer ${key}`} className='volunteer-obj'/>
      ))}
        </div>
    </section>
  );
}

export default Volunteers;
