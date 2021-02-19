import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { FiMoon, FiSun } from 'react-icons/fi'
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi'
import { ThemeContext } from 'styled-components'
import { uppercaseFirstLetter } from '../../helpers/functions'
import { ThemeModeContext } from '../../styles/themes'
import { Container } from './styles'

const Settings: React.FC = () => {
  const { i18n } = useTranslation()
  const { name: themed } = useContext(ThemeContext)
  const { toggleTheme } = useContext(ThemeModeContext)

  return (
    <Container>
      <h6>{uppercaseFirstLetter(i18n.t('settings:namespace'))}</h6>
      <div>
        <span>{uppercaseFirstLetter(i18n.t('settings:theme'))}</span>
        <button onClick={toggleTheme}>
          {themed === 'light' ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
      <div>
        <span>{uppercaseFirstLetter(i18n.t('settings:language'))}</span>
        <button>
          {i18n.language === 'pt'
            ? (
            <GiBrazilFlag size={22} />
              )
            : (
            <GiUsaFlag size={18} />
              )}
        </button>
      </div>
    </Container>
  )
}

export default Settings
