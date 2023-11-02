import { useTranslation } from "react-i18next"

export const TextSection = () => {
    const {t} = useTranslation()
    return (
        <ul>
            <div>
                {t('TO UKRAINIANS LIVILG NEAR THE FRONT LINE')}
            </div>
            <div>
                {t('TO THE MILITARY OF UKRAINE')}
            </div>
            <div>
                {t('TO THE FAMILIES OF THE FALLEN HEROES')}
            </div>
            <div>
                {t('TO THE FAMILIES WITH CHILDREN WITH DISABILITIE')}
            </div>
            <div>
                {t("TO CHILDREN'S SHELTERS")}
            </div>
            <div>
                {t("TO PREGNANT REFUGEE WOMEN AND REFUGEE FAMILIES WITH CHILDREN")}
            </div>
        </ul>
    )
}