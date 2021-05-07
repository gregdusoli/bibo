import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import bibleService from '../../../../services/bible'
import { Container } from './styles'

export interface IChapter {
  book: {
    abbrev: {
      pt: string,
      en: string
    },
    name: string,
    author: string,
    group: string,
    version: string
  },
  chapter: {
    number: number,
    verses: number
  },
  verses: [{
    number: number,
    text: string
  }]
}

interface IParams {
  version: string
  abbrev: string
  chapter: string
}

const Chapter: React.FC = () => {
  const [chapterVerses, setChapterVerses] = useState<IChapter | null>(null)
  const { version, abbrev, chapter } = useParams<IParams>()

  useEffect(() => {
    const num = chapter ? parseInt(chapter) : 1
    bibleService.getChapter(version, abbrev, num).then(result => setChapterVerses(result))
  }, [abbrev, chapter, version])

  return (
    <Container>
      <ul>
        {chapterVerses?.verses.map(verse => (
          <li key={verse.number}>
            <strong>{verse.number}</strong> {verse.text}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Chapter
