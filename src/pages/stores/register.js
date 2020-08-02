import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import { Form } from "components/Form"
import { Validation } from "utils/helpers"
import { Layout } from "components/Layout"

export default function StoreRegister() {
  const [data, setData] = useState(null)

  const fields = [
    {
      name: "name",
      validation: Validation.name,
      label: "Store Name:",
      properties: {
        type: "text",
        alt: "Name input",
        placeholder: "Toy R Us",
      },
    },
    {
      name: "description",
      validation: Validation.noValidation,
      label: "Description:",
      properties: {
        type: "textarea",
        alt: "Description input",
        placeholder:
          "If you can't find a toy here is cause it doesn't exist, the biggest store available",
        cols: "2",
        rows: "2",
      },
    },
    {
      name: "image",
      validation: Validation.noValidation,
      label: "Image:",
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
      //   createUser(values)
      //   if (!isCreationLoading && !creationHasError) {
      //     navigate("/")
      //   }
      console.log(data)
    }
  }, [data])
  return (
    <Layout>
      <h1>Register a new store</h1>
      <Form fields={fields} setData={setData} />
    </Layout>
  )
}
