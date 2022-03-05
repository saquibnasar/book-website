import React from "react";

function Input(props) {
  return (
    <>
      <input
        type={props.type}
        id={props.id}
        class="form-control login-heading font-18  ps-3 mb-3 shadow-none"
        placeholder={props.placeholder}
      />
    </>
  );
}

export default Input;
