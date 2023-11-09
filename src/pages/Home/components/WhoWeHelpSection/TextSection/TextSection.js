import { useTranslation } from "react-i18next"
import './TextSection.scss'

export const TextSection = () => {
    const {t} = useTranslation()
    return (
        <ul className="ul-help">
            <div className="help-element">
                {t('TO UKRAINIANS LIVILG NEAR THE FRONT LINE')}
            </div>
            <div className="help-element">
                {t('TO THE MILITARY OF UKRAINE')}
            </div>
            <div className="help-element">
                {t('TO THE FAMILIES OF THE FALLEN HEROES')}
            </div>
            <div className="help-element">
                {t('TO THE FAMILIES WITH CHILDREN WITH DISABILITIE')}
            </div>
            <div className="help-element">
                {t("TO CHILDREN'S SHELTERS")}
            </div>
            <div className="help-element">
                {t("TO PREGNANT REFUGEE WOMEN AND REFUGEE FAMILIES WITH CHILDREN")}
            </div>
        </ul>
    )
}