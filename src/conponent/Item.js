import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Book from "./Book";
import ItemData from "./ItemData";
import Content from "./Content";
function Item() {
  const params = useParams();

  const [book, setBook] = useState();

  useEffect(() => {
    setBook(
      ItemData.filter((val) => {
        return val.id === params.id;
      })[0]
    );
  }, [params.id]);

  if (book === undefined) {
    return (
      <>
        <h1 className="loading">Still loading...</h1>
      </>
    );
  } else {
    return (
      <>
        <Book
          book={book.book}
          images={book.images}
          Author={book.Author}
          Available={book.Available}
          Price={book.Price}
          key={book.id}
        />
        <Content title="Related  Books" />
      </>
    );
  }
}

export { Item };
