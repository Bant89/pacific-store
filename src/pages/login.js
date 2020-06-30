import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Form } from "components/Form"
import { Layout } from "components/Layout"
import useUser from "hooks/useUser"
import { Validation } from "utils/helpers"

export default function Login() {
  const [data, setData] = useState(null)
  const { login, isLogged, isLoginLoading, hasError } = useUser()
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

  useEffect(() => {
    if (Boolean(data)) {
      let body = {}
      data.forEach(e => {
        body[e.name] = e.value
      })
      login({ ...body })
    }
    if (isLogged) navigate("/")
  }, [data, isLogged])

  return (
    <Layout>
      {isLoginLoading ? (
        <strong>Checking credentials </strong>
      ) : (
        <Form fields={fields} setData={setData} />
      )}
      {hasError && <h3>Something went wrong</h3>}
    </Layout>
  )
}
