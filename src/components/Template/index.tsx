import React from 'react'
import Header from './Header'
import Nav from './Nav'
import { TopBar, Content, NavBar } from './styles'

const Template: React.FC = ({ children }) => (
  <>
    <TopBar>
      <Header />
    </TopBar>
    <Content>{children}</Content>
    <NavBar>
      <Nav />
    </NavBar>
  </>
)

export default Template
