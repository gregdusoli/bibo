import React, { useContext, useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { IBook } from '../../components/Book'
// import { IVersion } from '../../components/Version'
import { uppercaseFirstLetter } from '../../helpers/functions'
import HeaderContext from '../../hooks/context/Header'
import bibleService from '../../services/bible'
import { Container } from './styles'

const Bible: React.FC = () => {
  // const [versions, setVersions] = useState<IVersion[]>([])
  const { setHeader } = useContext(HeaderContext)
  const { i18n } = useTranslation()
  const [books, setBooks] = useState<IBook[]>([])

  useEffect(() => {
    try {
      // bibleService.getVersions().then((result) => setVersions(result))
      bibleService.getBooks().then(result => setBooks(result))
      setHeader({
        title: `${uppercaseFirstLetter(i18n.t('bible:namespace'))}`
      })
    } catch (error) {
      throw new Error()
    }
  }, [])

  return (
    <Container>
      {!books
        ? (
          <p>{uppercaseFirstLetter(i18n.t('general:loading'))}...</p>
          )
        : (
        <>
          {/* <Card bg="primmary" className="mb-2">
            <Card.Header>
              <Card.Title>
                {uppercaseFirstLetter(i18n.t('bible:versions'))}
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ul>
                {versions.map((version) => {
                  return (
                    <li key={version.version}>
                      <Button>{version.version.toUpperCase()}</Button>
                    </li>
                  )
                })}
              </ul>
            </Card.Body>
          </Card> */}
          <Card bg="primmary" className="mb-2">
            <Card.Header>
              <Card.Title>
                {uppercaseFirstLetter(i18n.t('bible:book'))}s
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <ul>
                {books.map(book => (
                  <li key={book.abbrev.en}>
                    <Link to={`/books/${book.abbrev.en}`}>
                      <Button>{book.name}</Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </>
          )}
    </Container>
  )
}

export default Bible
