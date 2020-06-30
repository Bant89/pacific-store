import React, { useState } from "react"
import { Form } from "components/Form"
import { Layout } from "components/Layout"
import useUser from "hooks/useUser"
import { Validation } from "utils/helpers"

export default function Login() {
  const [data, setData] = useState(null)
  const { login } = useUser()
  const fields = [
    {
      name: "email",
      validation: Validation.email,
      label: "Email",
      properties: {
        type: "email",
        alt: "Email input",
        placeholder: "user@email.com",
      },
    },
    {
      name: "password",
      validation: Validation.noValidation,
      label: "Password",
      properties: {
        type: "password",
        alt: "Password input",
      },
    },
  ]

  if (data !== null) {
    let body = {}
    data.forEach(e => {
      body[e.name] = e.value
    })
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
  }

  return (
    <Layout>
      <Form fields={fields} setData={setData} />
    </Layout>
  )
}
