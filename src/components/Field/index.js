import React, { useRef } from "react";
import Button from "../Button"
import { StyledLabel, StyledField, ErrorMessage } from "./styles";
import avatarPlaceholder from "../../static/images/avatarPlaceholder.jpg";

export default function Field({
  type = "text",
  name,
  label,
  errorMessage,
  isTouched,
  component,
  placeholder,
}) {

  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledField
        type={type}
        name={name}
        component={component}
        placeholder={placeholder}
      />
      {errorMessage && isTouched ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : null}
    </>
  );
}

export function SelectField({
  name,
  label,
  placeholder,
  children,
  errorMessage,
  isTouched,
}) {
  return (
    <>
      <StyledLabel htmlFor={name}>{label}</StyledLabel>
      <StyledField component="select" name={name} placeholder={placeholder}>
        {children}
      </StyledField>
      {errorMessage && isTouched ? (
        <ErrorMessage>{errorMessage}</ErrorMessage>
      ) : null}
    </>
  );
}

export function FileUploader({ setValue }) {
  const imgEl = useRef(null),
    inputEl = useRef(null);

  const handleChange = (event) => {
    event.persist();
    const file = event.target.files[0];
    setValue("image", file, false)
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        imgEl.current.src = reader.result;
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = (event) => {
    inputEl.current.click();
    event.preventDefault();
  };

  return (
    <>
      <img
        src={avatarPlaceholder}
        ref={imgEl}
        alt="uploaded by the user"
        style={{ width: "75%", height: "75%", margin: "0.5em auto" }}
      />
      <input
        type="file"
        id="input"
        onChange={handleChange}
        style={{ display: "none" }}
        ref={inputEl}
      />
      <Button onClick={handleClick}>Upload a photo</Button>
    </>
  );
}