import React, { useState } from "react"
import { Field } from "../Field"

export const Form = ({ fields }) => {
  console.log(JSON.stringify(fields))
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
      alert(JSON.stringify(values))
      setFormValidation("")
    } else {
      console.log(
        `Values length ${values.length} and Field length ${fields.length}`
      )
      setFormValidation("Missing fields")
    }
  }

  return (
    <form onSubmit={onSubmit}>
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
    </form>
  )
}
