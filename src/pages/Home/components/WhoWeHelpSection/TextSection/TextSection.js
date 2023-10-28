import { useTranslation } from "react-i18next"

export const TextSection = () => {
    const {t} = useTranslation()
    return (
        <ul>
            <li>
                {t('TO UKRAINIANS LIVILG NEAR THE FRONT LINE')}
            </li>
            <li>
                {t('TO THE MILITARY OF UKRAINE')}
            </li>
            <li>
                {t('TO THE FAMILIES OF THE FALLEN HEROES')}
            </li>
            <li>
                {t('TO THE FAMILIES WITH CHILDREN WITH DISABILITIE')}
            </li>
            <li>
                {t("TO CHILDREN'S SHELTERS")}
            </li>
            <li>
                {t("TO PREGNANT REFUGEE WOMEN AND REFUGEE FAMILIES WITH CHILDREN")}
            </li>
        </ul>
    )
}