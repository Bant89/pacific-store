import React, { useState } from "react"
import { Field } from "components/Field"
import { StyledForm } from "./styles"

export const Form = ({ fields, setData }) => {
  const [formValidation, setFormValidation] = useState("")

  const onSubmit = event => {
    event.preventDefault()

    const values = fields
      .map(field => ({
        ...field,
        value: document.getElementsByName(field.name)[0].value,
      }))
      .filter(field => !field.validation(field.value))
      .map(field => ({ name: field.name, value: field.value }))

    if (values.length === fields.length) {
      setData(values)
      setFormValidation("")
    } else {
      setFormValidation("Missing fields")
    }
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      {fields.map(field => {
        return (
          <React.Fragment key={field.name}>
            <Field {...field} key={field.name} />
            <br />
          </React.Fragment>
        )
      })}
      <p>{formValidation}</p>
      <button type="submit">Submit</button>
    </StyledForm>
  )
}
