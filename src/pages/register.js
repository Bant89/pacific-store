import React, { useState } from "react"
import axios from "axios"
import { Form } from "../components/Form"
import { Layout } from "../components/Layout"

import { Validation } from "../utils/helpers"

const Register = () => {
  const fields = [
    {
      name: "name",
      validation: Validation.name,
      label: "Name:",
      properties: {
        type: "text",
        required: "",
        alt: "Name input",
        placeholder: "John Fisherman",
      },
    },
    {
      name: "email",
      validation: Validation.email,
      label: "Email:",
      properties: {
        type: "email",
        required: "",
        alt: "Email input",
        placeholder: "user@email.com",
      },
    },
    {
      name: "password",
      validation: Validation.noValidation,
      label: "Password:",
      properties: {
        type: "password",
        required: "",
        alt: "Password input",
      },
    },
  ]

  return (
    <Layout>
      <Form fields={fields} />
    </Layout>
  )
}

export default Register
