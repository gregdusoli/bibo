import React from 'react'
import { ThemeContextProvider } from './Theme'
import { HeaderContextProvider } from './Header'

const GlobalContext: React.FC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <HeaderContextProvider>
        {children}
      </HeaderContextProvider>
    </ThemeContextProvider>
  )
}

export default GlobalContext
