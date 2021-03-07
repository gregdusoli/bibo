import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './translations.json'

export enum Languages {
  EN = 'en',
  BR = 'pt-BR'
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: (navigator.language === Languages.EN ? Languages.EN : Languages.BR),
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
