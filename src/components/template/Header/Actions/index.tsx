import React from 'react'
import { FiAward, FiClipboard, FiFileText, FiMap, FiSearch } from 'react-icons/fi'
import { Container } from './styles'

const Actions: React.FC = () => {
  return (
    <Container>
      <FiAward size={18} />
      <FiFileText size={18} />
      <FiMap size={18} />
      <FiSearch size={18} />
      <FiClipboard size={18} />
    </Container>
  )
}

export default Actions
