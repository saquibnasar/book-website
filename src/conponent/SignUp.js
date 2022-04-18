import React from "react";
import Input from "./Input";
import Label from "./Label";

function SignUp() {
  const FullNamePlaceholder = "Full Name";
  const FullNameTyppe = "text";
  const FullNameId = "inputName";
  const firstNamePlaceholder = "Address";
  const emailplaceholder = "Enter your Email";
  const emailTyppe = "number";
  const emailId = "inputEmail";
  const phoneplaceholder = "Enter your Phone Number";
  const phoneTyppe = "number";
  const phoneId = "inputPhone";
  const passwordplaceholder = "Enter your password";
  const passwordTyppe = "password";
  const passwordId = "inputPassword";
  const confirmPasswordplaceholder = "Confirm Password";
  const confirmPasswordTyppe = "password";
  const confirmPasswordId = "inputConfirmPassword";

  return (
    <>
      <section className="login bg-pri d-grid align-items-center h-100 pt-5 pb-5">
        <div className="container-fluid">
          <div className="row flex-column form bg-white m-auto">
            <div className="col-md-11 col-sm-12 m-auto">
              <Label for="inputEmail" content="Full Name" />
              <Input
                type={FullNameTyppe}
                id={FullNameId}
                placeholder={FullNamePlaceholder}
              />
            </div>
            <div className="col-md-11 col-sm-12 m-auto my-3">
              <Label for="inputEmail" content="Email" />
              <Input
                type={emailTyppe}
                id={emailId}
                placeholder={emailplaceholder}
              />
            </div>
            <div className="col-md-11 col-sm-12 m-auto my-3">
              <Label for="inputEmail" content="Phone Number" />
              <Input
                type={phoneTyppe}
                id={phoneId}
                placeholder={phoneplaceholder}
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
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <Label for="inputConfirmPassword" content="Confirm Password" />
              <Input
                type={confirmPasswordTyppe}
                id={confirmPasswordId}
                placeholder={confirmPasswordplaceholder}
              />
            </div>
            <div className="col-md-11 col-sm-12 m-auto my-3">
              <Label for="inputEmail" content="Address" />
              <textarea
                class="form-control address"
                placeholder={firstNamePlaceholder}
              ></textarea>
            </div>
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <button
                type="submit"
                class="w-100 login-heading bg-dark-brown p-3 text-white rounded font-26 border-0"
              >
                Sing Up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
