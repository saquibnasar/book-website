import React from "react";

function Label(props) {
  return (
    <>
      <label for={props.for} class="form-label login-heading">
        {props.content}
      </label>
    </>
  );
}

export default Label;
