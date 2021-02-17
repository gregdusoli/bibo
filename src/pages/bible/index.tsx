import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import bibleService from "../../services/bible";
import { IBook } from "../../components/Book";
import { IVersion } from "../../components/Version";
import { Button, Card } from "react-bootstrap";
import { Container, Section } from "./styles";
import booksFixture from "../../helpers/api/fixtures/books.json";
import versionsFixture from "../../helpers/api/fixtures/versions.json";
import { useTranslation } from "react-i18next";
import { uppercaseFirstLetter } from "../../helpers/functions";

const Bible: React.FC = () => {
  const [versions, setVersions] = useState<IVersion[]>([]);
  const { i18n } = useTranslation();
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    try {
      // bibleService.getVersions().then((result) => setVersions(result));
      // bibleService.getBooks().then((result) => setBooks(result));

      setVersions(versionsFixture);
      setBooks(booksFixture);
    } catch (error) {
      throw new Error();
    }
  }, []);

  return (
    <Container>
      <Section>
        <Card bg="primmary" className="mb-2">
          <Card.Header>
            <Card.Title>
              {uppercaseFirstLetter(i18n.t("bible:versions"))}
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <ul>
              {versions.map((version) => {
                return (
                  <li key={version.version}>
                    <Button>{version.version.toUpperCase()}</Button>
                  </li>
                );
              })}
            </ul>
          </Card.Body>
        </Card>
      </Section>
      <Section>
        <Card bg="primmary" className="mb-2">
          <Card.Header>
            <Card.Title>
              {uppercaseFirstLetter(i18n.t("bible:book"))}s
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <ul>
              {books.map((book) => {
                return (
                  <li key={book.abbrev.en}>
                    <Link to={`/books/${book.abbrev.en}`}>
                      <Button>{book.name}</Button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Card.Body>
        </Card>
      </Section>
    </Container>
  );
};

export default Bible;
