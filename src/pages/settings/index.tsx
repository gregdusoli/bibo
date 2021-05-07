import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FiMoon, FiSun } from 'react-icons/fi'
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi'
import { ThemeContext } from 'styled-components'
import { uppercaseFirstLetter } from '../../helpers/functions'
import HeaderContext from '../../hooks/context/Header'
import ThemeModeContext from '../../hooks/context/Theme'
import LanguageContext from '../../hooks/context/Language'
import { Container } from './styles'

const Settings: React.FC = () => {
  const { i18n } = useTranslation()
  const { name: themed } = useContext(ThemeContext)
  const { setHeader } = useContext(HeaderContext)
  const { changeLanguage } = useContext(LanguageContext)
  const { toggleTheme } = useContext(ThemeModeContext)

  useEffect(() => {
    setHeader({
      title: `${uppercaseFirstLetter(i18n.t('settings:namespace'))}`
    })
  }, [])

  return (
    <Container>
      <div>
        <span>{uppercaseFirstLetter(i18n.t('settings:theme'))}</span>
        <button onClick={toggleTheme}>
          {themed === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
      <div>
        <span>{uppercaseFirstLetter(i18n.t('settings:language'))}</span>
        <button onClick={changeLanguage}>
          {i18n.language === 'en' ? <GiUsaFlag size={18} /> : <GiBrazilFlag size={22} />}
        </button>
      </div>
    </Container>
  )
}

export default Settings
