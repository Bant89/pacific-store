import React, { useState } from "react"

export const Field = ({ name, validation, label, properties }) => {
  const [inputValue, setInputValue] = useState("")
  const [validate, setValidation] = useState("")
  let inputReturned = null

  const changeValue = event => {
    const { value } = event.target
    setInputValue(value)

    if (!validation(value)) {
      setValidation("")
    } else {
      setValidation(validation(value))
    }
  }

  inputReturned = (
    <input
      name={name}
      {...properties}
      onChange={changeValue}
      value={inputValue}
    />
  )

  return (
    <>
      <label htmlFor={name}>{label}</label>
      {inputReturned}
      {validate && <p>{validate}</p>}
    </>
  )
}
