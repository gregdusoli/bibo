import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { uppercaseFirstLetter } from "../../helpers/functions";
import bibleService from "../../services/bible";
import Modal, { ModalProps } from "../Template/Modal";
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
  const { i18n } = useTranslation();
  const { abbrev } = useParams<{ abbrev: string }>();

  useEffect(() => {
    bibleService.getBooks(abbrev).then((result) => setBook(result));
  }, [abbrev]);

  const modalProps: ModalProps = {
    button: {
      variant: "primary",
      text: `${uppercaseFirstLetter(i18n.t("book:literary_context"))}`,
    },
    title: `${uppercaseFirstLetter(i18n.t("book:literary_context"))} - ${
      book?.name
    }`,
    body: `${book?.comment}`,
    close: {
      variant: "primary",
      text: `${uppercaseFirstLetter(i18n.t("general:close"))}`,
    },
  };

  return (
    <Container>
      {book ? (
        <div>
          <ul>
            <li>
              <h3>{book.name}</h3>
            </li>
            <li>
              <strong>{uppercaseFirstLetter(i18n.t("book:author"))}: </strong>
              {book.author}
            </li>
            <li>
              <strong>
                {uppercaseFirstLetter(i18n.t("book:testament"))}:{" "}
              </strong>
              {book.testament}
            </li>
            <li>
              <strong>{uppercaseFirstLetter(i18n.t("book:group"))}: </strong>
              {book.group}
            </li>
            <li>
              <strong>{uppercaseFirstLetter(i18n.t("book:chapter"))}s: </strong>
              {book.chapters}
            </li>
            {book.comment && (
              <li>
                <Modal {...modalProps} />
              </li>
            )}
          </ul>
        </div>
      ) : (
        <p>{uppercaseFirstLetter(i18n.t("general:loading"))}...</p>
      )}
    </Container>
  );
};

export default Book;
