import React from "react"
import * as Yup from "yup"
import { Formik, Form } from "formik"
import Field from "../components/Field"
import { Layout } from "components/Layout"
import useUser from "hooks/useUser"
import {
  MainFormContainer,
  FormContainer,
  FieldSection,
  ActionSection,
} from "../styles/formStyles";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Requerido"),
  password: Yup.string().required("Requerido")
})

export default function Login() {
  const { login, isLogged, isLoginLoading, hasError } = useUser()

  return (
    <Layout>
      {isLoginLoading ? (
        <strong>Checking credentials </strong>
      ) : (
          <MainFormContainer>
            <h1>Crea una cuenta en Pacific Stores</h1>
            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                // login(values)
                console.log(values)
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <FormContainer>
                    <FieldSection>
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
                    </FieldSection>
                    <ActionSection>
                      <button type="submit">Login</button>
                    </ActionSection>
                  </FormContainer>
                </Form>
              )}
            </Formik>
          </MainFormContainer>
        )}
      {hasError && <h3>Something went wrong</h3>}
    </Layout>
  )
}
