import React, { createContext } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { themes } from '../../../styles/themes'
import useSavedState from '../../useSavedState'

interface ThemeContextProps {
  theme: DefaultTheme
  toggleTheme: () => void
}

const INITIAL_VALUE = {
  theme: themes.light,
  toggleTheme: () => {}
}

const ThemeContext = createContext<ThemeContextProps>(INITIAL_VALUE)

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useSavedState<DefaultTheme>('theme', INITIAL_VALUE.theme)

  function toggleTheme () {
    const newTheme = theme.name === 'light' ? themes.dark : themes.light
    setTheme(newTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default ThemeContext
