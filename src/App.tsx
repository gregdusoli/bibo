import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Template from './components/template'
import './config/i18n'
import Routes from './config/routes'
import GlobalContext from './hooks/context'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <GlobalContext>
      <BrowserRouter>
        <GlobalStyle />
        <Template>
          <Routes />
        </Template>
      </BrowserRouter>
    </GlobalContext>
  )
}

export default App
