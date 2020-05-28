import React, { useState } from "react"

export const Field = ({ name, validation, label, properties }) => {
  const [inputValue, setInputValue] = useState("")
  const [fileValue, setFileValue] = useState(undefined)
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
      <input
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
      <label htmlFor={name}>{label}</label>
      {inputReturned}
      {validate && <p>{validate}</p>}
    </>
  )
}
