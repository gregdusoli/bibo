import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { uppercaseFirstLetter } from '../../helpers/functions'
import HeaderContext from '../../hooks/context/Header'
import { Container } from './styles'

const Notification: React.FC = () => {
  const { i18n } = useTranslation()
  const { setHeader } = useContext(HeaderContext)

  useEffect(() => {
    setHeader({
      title: `${uppercaseFirstLetter(i18n.t('notifications:namespace'))}`
    })
  }, [])

  return <Container></Container>
}

export default Notification
