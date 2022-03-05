import React from "react";
import Input from "./Input";
import Label from "./Label";
import { Link } from "react-router-dom";

function Login() {
  const emailplaceholder = "Enter your email";
  const emailTyppe = "Email";
  const emailId = "inputEmail";
  const passwordplaceholder = "Enter your password";
  const passwordTyppe = "password";
  const passwordId = "inputPassword";

  return (
    <>
      <section className="login bg-pri d-grid align-items-center">
        <div className="container-fluid">
          <div className="row flex-column form bg-white m-auto">
            <div className="col-md-11 col-sm-12 m-auto">
              <Label for="inputEmail" content="Email" />
              <Input
                type={emailTyppe}
                id={emailId}
                placeholder={emailplaceholder}
              />
            </div>
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <Label for="inputPassword" content="Password" />
              <Input
                type={passwordTyppe}
                id={passwordId}
                placeholder={passwordplaceholder}
              />
            </div>
            <div className="col-md-11 col-sm-12 m-auto d-flex ">
              <Link
                to="/"
                className="login-heading font-18 ms-auto fw-medium text-decoration-none"
              >
                Forgot password
              </Link>
            </div>
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <button
                type="button"
                class="w-100 login-heading bg-dark-brown p-3 text-white rounded font-26 border-0"
              >
                Sing in
              </button>
            </div>
            <div className="col-md-11 col-sm-12 m-auto mb-3 text-center">
              <h5 className="login-heading color-light-brown font-21">
                Don’t have an account?
                <Link
                  to="/signuppage1"
                  className="font-23 color-dark-brown text-decoration-none"
                >
                  Sign up for free
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
