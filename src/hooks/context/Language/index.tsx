import React, { createContext } from 'react'
import { IconType } from 'react-icons'
import useSavedState from '../../useSavedState'
import i18n, { Languages } from '../../../config/i18n'

interface LanguageProps {
  name: string
  flag?: IconType
}

interface LanguageContextProps {
  language: LanguageProps
  changeLanguage: () => void
}

const INITIAL_VALUE = {
  language: {
    name: navigator.language
  },
  changeLanguage: () => {}
}

const LanguageContext = createContext<LanguageContextProps>(INITIAL_VALUE)

export const LanguageContextProvider: React.FC = ({ children }) => {
  const [lang, setLang] = useSavedState<LanguageProps>('language', INITIAL_VALUE.language)

  function changeLanguage () {
    const newLanguage = lang.name === 'en' ? { name: Languages.BR } : { name: Languages.EN }
    setLang(newLanguage)
    i18n.changeLanguage(newLanguage.name)
  }

  return (
    <LanguageContext.Provider value={{ language: lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
