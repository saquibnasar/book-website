import React from "react";
import Input from "./Input";
import Label from "./Label";
import { Link } from "react-router-dom";

function SignUpPage2() {
  const firstNamePlaceholder = "First Name";
  const firstNameTyppe = "text";
  const firstNameId = "inputName";
  const lastNamePlaceholder = "Last Name";
  const lastNameTyppe = "text";
  const lastNameId = "inputLastName";

  return (
    <>
      <section className="login bg-pri d-grid align-items-center">
        <div className="container-fluid">
          <div className="row flex-column form bg-white m-auto">
            <div className="col-md-11 col-sm-12 m-auto">
              <Label for="inputEmail" content="First Name" />
              <Input
                type={firstNameTyppe}
                id={firstNameId}
                placeholder={firstNamePlaceholder}
              />
            </div>
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <Label for="inputPassword" content="Last Name" />
              <Input
                type={lastNameTyppe}
                id={lastNameId}
                placeholder={lastNamePlaceholder}
              />
            </div>
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <Link
                to="/signuppage2"
                className="text-decoration-none text-white w-100 login-heading bg-dark-brown p-3 text-white rounded font-26 border-0 d-inline-block text-center"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUpPage2;
