import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams, Link } from 'react-router-dom'
import { uppercaseFirstLetter } from '../../helpers/functions'
import bibleService from '../../services/bible'
import Modal, { ModalProps } from '../Template/Modal'
import { Container, Section } from './styles'
import { Card, Button } from 'react-bootstrap'

// TODO : remove this variable later
const versionHardCoded = 'nvi'

export interface IBook {
  abbrev: {
    pt: string,
    en: string,
  },
  author: string,
  chapters: number,
  comment?: string,
  group: string,
  name: string,
  testament: string
}

interface IParams {
  abbrev: string
}

const Book: React.FC = () => {
  const [book, setBook] = useState<IBook | null>(null)
  const { i18n } = useTranslation()
  const { abbrev } = useParams<IParams>()

  useEffect(() => {
    bibleService.getBooks(abbrev).then((result) => setBook(result))
  }, [abbrev])

  const modalProps: ModalProps = {
    button: {
      variant: 'primary',
      text: `${uppercaseFirstLetter(i18n.t('book:literary_context'))}`
    },
    title: `${uppercaseFirstLetter(i18n.t('book:literary_context'))} - ${
      book?.name
    }`,
    body: `${book?.comment}`,
    close: {
      variant: 'primary',
      text: `${uppercaseFirstLetter(i18n.t('general:close'))}`
    }
  }

  const chapterLink = (bookChapters: number): Array<{ chapter: number, link: string }> => {
    const chapterLinks = []
    for (let i = 1; i <= bookChapters; i++) {
      chapterLinks.push({
        chapter: i,
        link: `/books/${versionHardCoded}/${book?.abbrev.pt}/${i}`
      })
    }
    return chapterLinks
  }

  return (
    <Container>
    {book
      ? (
        <div>
          <ul>
            <li>
              <h3>{book.name}</h3>
            </li>
            <li>
              <strong>{uppercaseFirstLetter(i18n.t('book:author'))}: </strong>
              {book.author}
            </li>
            <li>
              <strong>
                {uppercaseFirstLetter(i18n.t('book:testament'))}:{' '}
              </strong>
              {book.testament}
            </li>
            <li>
              <strong>{uppercaseFirstLetter(i18n.t('book:group'))}: </strong>
              {book.group}
            </li>
            <li>
              <strong>{uppercaseFirstLetter(i18n.t('book:chapter'))}s: </strong>
              {book.chapters}
            </li>
            {book.comment && (
              <li>
                <Modal {...modalProps} />
              </li>
            )}
          </ul>

          <Section>
            <Card bg="primmary" className="mb-2">
              <Card.Header>
                <Card.Title>
                  {uppercaseFirstLetter(i18n.t('book:chapter'))}s
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <ul>
                  {chapterLink(book.chapters).map(({ chapter, link }) => (
                    <li key={chapter}>
                      <Link to={link}>
                        <Button>{chapter}</Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Section>

        </div>
        )
      : (
        <p>{uppercaseFirstLetter(i18n.t('general:loading'))}...</p>
        )}
    </Container>
  )
}

export default Book
