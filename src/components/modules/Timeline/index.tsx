import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { uppercaseFirstLetter } from '../../../helpers/functions'
import HeaderContext from '../../../hooks/context/Header'
import Button from '../../template/Button'
import Jumbotron from '../../template/Jumbotron'
import { Container } from './styles'

const Timeline: React.FC = () => {
  const { i18n } = useTranslation()
  const { setHeader } = useContext(HeaderContext)

  useEffect(() => {
    setHeader({
      title: `${uppercaseFirstLetter(i18n.t('timeline:namespace'))}`
    })
  }, [])

  return (
    <Container>
      <Jumbotron fluid>
        <h1>Estudo em destaque</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Ler estudo</Button>
        </p>
      </Jumbotron>
    </Container>
  )
}

export default Timeline
