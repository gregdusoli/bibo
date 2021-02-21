import React, { createContext } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import useSavedState from '../../useSavedState'
import { themes } from '../../../styles/themes'

interface ThemeContextProps {
  toggleTheme: () => void
}

const INITIAL_VALUE = { toggleTheme: () => {} }

const ThemeContext = createContext<ThemeContextProps>(INITIAL_VALUE)

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useSavedState<DefaultTheme>('theme', themes.light)

  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? themes.dark : themes.light)
  }

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default ThemeContext
