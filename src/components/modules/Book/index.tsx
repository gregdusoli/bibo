import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { uppercaseFirstLetter } from '../../../helpers/functions'
import HeaderContext from '../../../hooks/context/Header'
import bibleService from '../../../services/bible'
import Button from '../../template/Button'
import Card from '../../template/Card'
import Modal, { ModalProps } from '../../template/Modal'
import { Container } from './styles'

// TODO : remove this variable later
const versionHardCoded = 'nvi'

export interface IBook {
  abbrev: {
    pt: string;
    en: string;
  };
  author: string;
  chapters: number;
  comment?: string;
  group: string;
  name: string;
  testament: string;
}

interface IParams {
  abbrev: string;
}

const Book: React.FC = () => {
  const { setHeader } = useContext(HeaderContext)
  const { i18n } = useTranslation()
  const { abbrev } = useParams<IParams>()
  const [book, setBook] = useState<IBook | null>(null)

  useEffect(() => {
    bibleService.getBooks(abbrev)
      .then(result => {
        setBook(result)
        setHeader({
          title: `${uppercaseFirstLetter(i18n.t('book:namespace'))}: ${result.name}`
        })
      })
  }, [abbrev])

  useEffect(() => {
    setHeader({
      title: `${uppercaseFirstLetter(i18n.t('book:namespace'))}s`
    })
  }, [])

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

  const chapterLink = (
    bookChapters: number
  ): Array<{ chapter: number; link: string }> => {
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
      {!book
        ? (
          <p>{uppercaseFirstLetter(i18n.t('general:loading'))}...</p>
          )
        : (
        <>
          <div>
            <ul>
              {/* <li>
                <h3>{book.name}</h3>
              </li> */}
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
                <strong>
                  {uppercaseFirstLetter(i18n.t('book:chapter'))}s:{' '}
                </strong>
                {book.chapters}
              </li>
              {book.comment && (
                <li>
                  <Modal {...modalProps} />
                </li>
              )}
            </ul>
          </div>
          <div>
            <Card bg="primmary" className="mb-2" title={uppercaseFirstLetter(i18n.t('book:chapter'))}>
              <ul>
                {chapterLink(book.chapters).map(({ chapter, link }) => (
                  <li key={chapter}>
                    <Link to={link}>
                      <Button>{chapter}</Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </>
          )}
    </Container>
  )
}

export default Book
