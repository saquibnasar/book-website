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
  const genderPlaceholder = "Gender";
  const genderTyppe = "text";
  const genderId = "inputGender";

  return (
    <>
      <section className="login bg-pri d-grid align-items-center">
        <div className="container-fluid">
          <div className="row flex-column form bg-white m-auto">
            <div className="col-md-11 col-sm-12 m-auto">
              <div className="row justify-content-between">
                <div className="col-md-4 col-sm-12">
                  <Input
                    type={dayTyppe}
                    id={dayId}
                    placeholder={dayPlaceholder}
                  />
                </div>
                <div className="col-md-4 col-sm-12">
                  <FloatingLabels />
                </div>
                <div className="col-md-4 col-sm-12">
                  <Input
                    type={yearTyppe}
                    id={yearId}
                    placeholder={yearPlaceholder}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <Input
                type={genderTyppe}
                id={genderId}
                placeholder={genderPlaceholder}
              />
            </div>
            <div className="col-md-11 col-sm-12 mx-auto my-3">
              <button
                type="button"
                class="w-100 login-heading bg-dark-brown p-3 text-white rounded font-26 border-0"
              >
                <Link
                  to="/signuppage3"
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

export default SignUpPage1;
