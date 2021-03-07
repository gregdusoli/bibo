import React from 'react'
import { ThemeContextProvider } from './Theme'
import { HeaderContextProvider } from './Header'
import { LanguageContextProvider } from './Language'

const GlobalContext: React.FC = ({ children }) => {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>
        <HeaderContextProvider>
          {children}
        </HeaderContextProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  )
}

export default GlobalContext
