import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './translate/en.json'
import ua from './translate/ua.json'



const resources = {
  en: {
      translation: en,
  },
  ua:{
      translation:ua,
  }
}

i18n
.use(initReactI18next)
.init({
  resources,
  lng:JSON.parse(localStorage.getItem('language')),
  fallbackLng:'ua'
})

export default i18n;