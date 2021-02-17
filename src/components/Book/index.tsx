import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bibleService from "../../services/bible";
import { Container } from "./styles";

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

const Book: React.FC = () => {
  const [book, setBook] = useState<IBook | null>(null);
  const { abbrev } = useParams<{ abbrev: string }>();

  useEffect(() => {
    bibleService.getBooks(abbrev).then((result) => setBook(result));
  }, [abbrev]);

  return (
    <Container>
      {book ? (
        <div>
          <ul>
            <li>
              <h3>{book.name}</h3>
            </li>
            <li>
              <strong>Autor:</strong> {book.author}
            </li>
            <li>
              <strong>Testamento:</strong> {book.testament}
            </li>
            <li>
              <strong>Grupo:</strong> {book.group}
            </li>
            <li>
              <strong>Capítulos:</strong> {book.chapters}
            </li>
            {book.comment && (
              <li>
                <strong>Comentários:</strong> {book.comment}
              </li>
            )}
          </ul>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </Container>
  );
};

export default Book;
