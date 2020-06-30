import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Form } from "components/Form"
import { Layout } from "components/Layout"
import useUser from "hooks/useUser"
import { Validation } from "utils/helpers"

const Register = () => {
  const [data, setData] = useState(null)
  const { isCreationLoading, createUser, creationHasError } = useUser()
  const fields = [
    {
      name: "name",
      validation: Validation.name,
      label: "Name:",
      properties: {
        type: "text",
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
        alt: "Email input",
        placeholder: "user@email.com",
      },
    },
    {
      name: "password",
      validation: Validation.password,
      label: "Password:",
      properties: {
        type: "password",
        alt: "Password input",
      },
    },
    {
      name: "avatar",
      validation: Validation.noValidation,
      label: "Avatar:",
      properties: {
        type: "file",
        alt: "File input",
      },
    },
  ]

  useEffect(() => {
    if (Boolean(data)) {
      let body = {}
      data.forEach(e => {
        body[e.name] = e.value
      })
      const bodyWithoutPhoto = ({ photo, ...rest }) => rest
      let values = bodyWithoutPhoto(body)
      createUser(values)
      if (!isCreationLoading && !creationHasError) {
        navigate("/")
      }
    }
  }, [data])

  return (
    <Layout>
      <Form fields={fields} setData={setData} />
      {isCreationLoading && <strong>Validating data</strong>}
      {creationHasError && <strong>Something went wrong</strong>}
    </Layout>
  )
}

export default Register
