import React, { useState, useEffect } from 'react'
import bibleService from '../../../services/bible'
import { Container } from './styles'

export interface IVersion {
  version: string;
  verses: number;
}

const Version: React.FC = () => {
  const [versions, setVersions] = useState<IVersion[]>([])

  useEffect(() => {
    try {
      bibleService.getVersions().then((result) => setVersions(result))
    } catch (error) {
      throw new Error()
    }
  }, [])

  return (
    <Container>
      <h3>Versões</h3>
      <ul>
        {versions.map((version) => {
          return (
            <li key={version.version}>
              <a href="#!">{version.version}</a>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Version
