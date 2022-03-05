import React from "react";

function FloatingLabels() {
  return (
    <>
      <div class="form-floating mb-3">
        <select
          class="form-select"
          aria-label="Default select example"
          id="floatingInput"
        >
          <option value="">Month</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        {/* <label for="floatingInput" className="login-heading font-18">
          Email address
        </label> */}
      </div>
    </>
  );
}

export default FloatingLabels;
