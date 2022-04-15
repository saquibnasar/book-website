import React from "react";
import Label from "./Label";
import { Link } from "react-router-dom";

export default function SignUpPage3() {
  const firstNamePlaceholder = "Address";
  return (
    <>
      <section className="login bg-pri d-grid align-items-center">
        <div className="container-fluid">
          <div className="row flex-column form bg-white m-auto">
            <div className="col-md-11 col-sm-12 m-auto">
              <Label for="inputEmail" content="Address" />
              <textarea
                class="form-control address"
                placeholder={firstNamePlaceholder}
              ></textarea>
            </div>
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <button
                type="button"
                class="w-100 login-heading bg-dark-brown p-3 text-white rounded font-26 border-0"
              >
                <Link
                  to="/signuppage4"
                  className="text-decoration-none text-white"
                >
                  Next
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
