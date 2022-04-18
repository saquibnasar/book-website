import React from "react";
import Label from "./Label";
import Input from "./Input";
import { Link } from "react-router-dom";
export default function Upload() {
  const inputplaceholder = "Book Title";
  const inputplaceholder2 = "Author Name";
  const inputplaceholder3 = "Market price";
  const inputplaceholder4 = "Quantity";
  const inputTyppe = "text";
  const textId = "inputText";

  return (
    <>
      <section className="login bg-pri d-grid align-items-center pb-5 h-100 pt-5">
        <div className="container-fluid">
          <div className="row flex-column form bg-white m-auto">
            <div className="col-md-10 col-sm-12 m-auto">
              <Label for="inputText" content="Book Name" />
              <Input
                type={inputTyppe}
                id={textId}
                placeholder={inputplaceholder}
              />
            </div>
            <div className="col-md-10 col-sm-12 m-auto">
              <Label for="inputText" content="Writer name" />
              <Input
                type={inputTyppe}
                id={textId}
                placeholder={inputplaceholder2}
              />
            </div>
            <div className="col-md-10 col-sm-12 m-auto">
              <Label for="inputText" content="Market price" />
              <Input
                type={inputTyppe}
                id={textId}
                placeholder={inputplaceholder3}
              />
            </div>
            <div className="col-md-10 col-sm-12 m-auto">
              <Label for="inputText" content="Quantity" />
              <Input
                type={inputTyppe}
                id={textId}
                placeholder={inputplaceholder4}
              />
            </div>
            <div className="col-md-10 col-sm-12 m-auto">
              <Label for="fileInput" content="Book cover" />
              <Input type="file" id="fileInput" />
            </div>
            <div className="col-md-10 col-sm-12 mx-auto my-3">
              <Link
                to="/donate"
                className="w-100 login-heading bg-dark-brown p-3 text-white rounded font-26 border-0 text-center d-inline-block text-decoration-none"
              >
                Upload
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
