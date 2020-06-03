import React, { useState } from "react"
import { Field } from "../Field"
import { StyledForm } from "./styles"
import axios from "axios"

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
      console.log(values)
      let requestBody = {}
      values.forEach(e => {
        if (e.name !== "avatar") requestBody[e.name] = e.value
        if (e.name === "password")
          requestBody["password_confirmation"] = e.value
      })
      requestBody["is_admin"] = false
      axios({
        method: "post",
        url: "http://localhost:3000/users",
        data: requestBody,
        headers: {
          "Content-Type": "application/json",
          cors: "no-mode",
        },
      })
        .then(data => console.log(data))
        .catch(error => console.error(error))
      setFormValidation("")
    } else {
      console.log(
        `Values length ${values.length} and Field length ${fields.length}`
      )
      console.log(`Values: ${JSON.stringify(values)}`)
      console.log(`Fields: ${JSON.stringify(fields)}`)
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
