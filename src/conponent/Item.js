import React from "react";
import BookCollection from "./BookCollection";

import Content from "./Content";
function Item() {
  return (
    <>
      <BookCollection />
      <Content title="Related  Book" />
    </>
  );
}

export { Item };
