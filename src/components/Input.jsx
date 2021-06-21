/* eslint-disable no-undef */
import React from "react";
import Button from "@material-ui/core/Button";

import "./input.css";

export default function BasicTextFields(props) {
  const [value, setValue] = React.useState("");
  //   ! Input value
  function inputTExt(e) {
    setValue(e.target.value);
  }

  // ! Submit form
  function formSubmit(e) {
    e.preventDefault();
    props.handler(value);
    //   ! clear input
    setValue("");
  }
  return (
    <form className="form" onSubmit={formSubmit} noValidate autoComplete="off">
      <input type="search" value={value} required onChange={inputTExt} />
      <Button onClick={formSubmit} variant="contained" color="secondary">
        Search Images
      </Button>
    </form>
  );
}
