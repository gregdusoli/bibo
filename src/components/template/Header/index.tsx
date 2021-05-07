import React, { useContext } from 'react'
import { FiSettings } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import HeaderContext from '../../../hooks/context/Header'
import Actions from './Actions/index'
import { Container } from './styles'

const Header: React.FC = () => {
  const { header } = useContext(HeaderContext)

  return (
    <Container>
      <h6>{header.title}</h6>
      <Actions />
      <Link to="/settings">
        <FiSettings size={18} />
      </Link>
    </Container>
  )
}

export default Header
