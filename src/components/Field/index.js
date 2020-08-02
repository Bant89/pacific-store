import React, { useState } from "react"
import { NormalInput, Label, ErrorMessage, StyledTextArea } from "./styles"

export const Field = ({ name, validation, label, properties }) => {
  const [inputValue, setInputValue] = useState("")
  const [, setFileValue] = useState(undefined)
  const [validate, setValidation] = useState("")
  let inputReturned = undefined

  const changeValue = event => {
    const { value } = event.target
    setInputValue(value)

    if (!validation(value)) {
      setValidation("")
    } else {
      setValidation(validation(value))
    }
  }

  const changeFileValue = event => {
    if (properties.multiple) {
      setFileValue(event.target.files)
    } else {
      setFileValue(event.target.files[0])
    }
  }

  switch (properties.type) {
    case "file":
      inputReturned = (
        <input name={name} {...properties} onChange={changeFileValue} />
      )
    case "textarea":
      inputReturned = (
        <StyledTextArea
          name={name}
          value={inputValue}
          onChange={changeValue}
          {...properties}
        />
      )
    default:
      inputReturned = (
        <NormalInput
          name={name}
          {...properties}
          onChange={changeValue}
          value={inputValue}
        />
      )
  }

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      {inputReturned}
      {validate && <ErrorMessage>{validate}</ErrorMessage>}
    </>
  )
}
