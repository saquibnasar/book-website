import React from "react";
import Input from "./Input";
import Label from "./Label";
import { Link } from "react-router-dom";
import FloatingLabels from "./FloatingLabels";

function SignUpPage1() {
  const dayPlaceholder = "Day";
  const dayTyppe = "number";
  const dayId = "inputDay";
  const monthPlaceholder = "Month";
  const monthTyppe = "text";
  const monthId = "inputMonth";
  const yearPlaceholder = "Year";
  const yearTyppe = "number";
  const yearId = "inputYear";
  const firstNamePlaceholder = "Address";

  return (
    <>
      <section className="login bg-pri d-grid align-items-center">
        <div className="container-fluid">
          <div className="row flex-column form bg-white m-auto">
            <div className="col-md-11 col-sm-12 mx-auto">
              <h4 className="mb-3 color-light-brown font-21">Gender</h4>
              <div class="d-flex justify-content-between">
                <div className="">
                  <input
                    class="form-check-input me-2 shadow-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label ff-Roboto"
                    for="flexRadioDefault1 "
                  >
                    Male
                  </label>
                </div>
                <div className="">
                  <input
                    class="form-check-input me-2 shadow-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label ff-Roboto"
                    for="flexRadioDefault1"
                  >
                    Female
                  </label>
                </div>
                <div className="">
                  <input
                    class="form-check-input me-2 shadow-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    class="form-check-label ff-Roboto"
                    for="flexRadioDefault1"
                  >
                    Rather not say
                  </label>
                </div>
              </div>
            </div>
            <div className="col-md-11 col-sm-12 m-auto my-3">
              <Label for="inputEmail" content="Address" />
              <textarea
                class="form-control address"
                placeholder={firstNamePlaceholder}
              ></textarea>
            </div>
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <Link
                to="/signuppage3"
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

export default SignUpPage1;
