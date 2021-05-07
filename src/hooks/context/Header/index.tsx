import React, { createContext, useState } from 'react'

interface HeaderProps {
  title: string
}

interface HeaderContextProps {
  header: HeaderProps
  setHeader: React.Dispatch<React.SetStateAction<HeaderProps>>
}

const INITIAL_VALUE = {
  header: { title: '' },
  setHeader: () => {}
}

const HeaderContext = createContext<HeaderContextProps>(INITIAL_VALUE)

export const HeaderContextProvider: React.FC = ({ children }) => {
  const [header, setHeader] = useState(INITIAL_VALUE.header)

  return (
    <HeaderContext.Provider value={{ header, setHeader }}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderContext
