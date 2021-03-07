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
<<<<<<< HEAD
=======
// changeLanguage: React.Dispatch<React.SetStateAction<LanguageProps>>
>>>>>>> 22545bc453eac887e9641991959ea28f7b3d5b59

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
<<<<<<< HEAD
    const newLanguage = lang.name === 'en' ? { name: Languages.BR } : { name: Languages.EN }
    setLang(newLanguage)
    i18n.changeLanguage(newLanguage.name)
=======
    setLang(lang.name === 'en' ? { name: Languages.BR } : { name: Languages.EN })
    i18n.changeLanguage(lang.name)
>>>>>>> 22545bc453eac887e9641991959ea28f7b3d5b59
  }

  return (
    <LanguageContext.Provider value={{ language: lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext
