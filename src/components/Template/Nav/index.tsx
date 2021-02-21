import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'
import {
  BiBookAdd,
  BiFileFind,
  BiGroup,
  BiMessage,
  BiWorld
} from 'react-icons/bi'

const Nav: React.FC = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">
          <BiWorld />
        </Link>
      </li>
      <li>
        <Link to="/bible">
          <BiBookAdd />
        </Link>
      </li>
      <li>
        <Link to="/studies">
          <BiFileFind />
        </Link>
      </li>
      <li>
        <Link to="/groups">
          <BiGroup />
        </Link>
      </li>
      <li>
        <Link to="/notifications">
          <BiMessage />
        </Link>
      </li>
    </ul>
  </Container>
)

export default Nav
