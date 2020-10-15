import React from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import Field, { FileUploader } from "../components/Field"
import { Layout } from "components/Layout"
import useUser from "hooks/useUser"
import {
  MainFormContainer,
  FormContainer,
  FieldSection,
  ActionSection,
} from "../styles/formStyles";

const RegisterUserSchema = Yup.object().shape({
  name: Yup.string().required("Requerido"),
  email: Yup.string().email("Email inválido").required("Requerido"),
  password: Yup.string().required("Requerido"),
  password_confirmation: Yup.mixed().oneOf([Yup.ref('password'), null], 'Contraseñas deben ser idénticas'),
  is_admin: Yup.boolean().default(true),
  image: Yup.mixed()
})


const Register = () => {
  const { isCreationLoading, createUser, creationHasError } = useUser()

  return (
    <Layout>
      <MainFormContainer>
        <h1>Crea una cuenta en Pacific Stores</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            image: ""
          }}
          validationSchema={RegisterUserSchema}
          onSubmit={(values) => {
            createUser(values)
          }}
        >
          {({ setFieldValue, errors, touched }) => (
            <Form>
              <FormContainer>
                <FieldSection>
                  <Field
                    name="name"
                    label="Nombre"
                    errorMessage={errors.name}
                    isTouched={touched.name}
                  />
                  <Field
                    type="email"
                    name="email"
                    label="Correo electrónico"
                    errorMessage={errors.email}
                    isTouched={touched.email}
                  />
                  <Field
                    type="password"
                    name="password"
                    label="Contraseña"
                    errorMessage={errors.password}
                    isTouched={touched.password}
                  />
                  <Field
                    type="password"
                    name="password_confirmation"
                    label="Confirmación contraseña"
                    errorMessage={errors.password_confirmation}
                    isTouched={touched.password_confirmation}
                  />
                  <FileUploader setValue={setFieldValue} />
                </FieldSection>
                <ActionSection>
                  <button type="submit">Crear cuenta</button>
                </ActionSection>
              </FormContainer>
            </Form>
          )}
        </Formik>
        {isCreationLoading && <strong>Validating data</strong>}
        {creationHasError && <strong>Something went wrong</strong>}
      </MainFormContainer>
    </Layout>
  )
}

export default Register
