import React, { useState } from "react"
import { NormalInput, Label, ErrorMessage } from "./styles"

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

  inputReturned =
    properties.type !== "file" ? (
      <NormalInput
        name={name}
        {...properties}
        onChange={changeValue}
        value={inputValue}
      />
    ) : (
      <input name={name} {...properties} onChange={changeFileValue} />
    )

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      {inputReturned}
      {validate && <ErrorMessage>{validate}</ErrorMessage>}
    </>
  )
}
