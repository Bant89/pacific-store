import React, { useState } from "react"
import * as Yup from "yup"
import { navigate } from "gatsby"
import { Formik, Form } from "formik"
import styled from "styled-components"
import Field from "components/Field"
import Button from "components/Button"
import { Layout } from "components/Layout"
import ModalPortal from "components/Modals/ModalPortal"
import useUser from "hooks/useUser"
import {
  ModalContentContainer,
  ModalFormItem,
  StyledLink
} from "../styles/modalStyles";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Requerido"),
  password: Yup.string().required("Requerido")
})

export default function Login() {

  const PageContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media(min-width: 768px){
      width: 80vw;
    }
  `;

  const ContentContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: red;
  `;

  const FormContainer = styled.div`
    flex-grow: 2;
    padding: 0.5em;
    width: 100%;
    background-color: #f6f6f6;
    @media(min-width: 768px) {
        width: 450px;
    }
  `;

  const { login, isLoginLoading, hasError } = useUser()
  const [modal, setModal] = useState(false)

  return (
    <Layout>
      <PageContainer>
        <ContentContainer>Probando</ContentContainer>
        {isLoginLoading ? (
          <strong>Checking credentials </strong>
        ) : (
            <Formik
              initialValues={{
                email: "",
                password: ""
              }}
              validationSchema={LoginSchema}
              onSubmit={(values) => {
                login(values)
                if (!isLoginLoading && !hasError)
                  navigate("/profile")
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <FormContainer>
                    <ModalContentContainer>
                      <ModalFormItem>
                        <Field
                          type="email"
                          name="email"
                          label="Correo electrónico"
                          errorMessage={errors.email}
                          isTouched={touched.email}
                        />
                      </ModalFormItem>
                      <ModalFormItem>
                        <Field
                          type="password"
                          name="password"
                          label="Contraseña"
                          errorMessage={errors.password}
                          isTouched={touched.password}
                        />
                      </ModalFormItem>
                      <Button type="submit">Login</Button>
                      <p>
                        Don't have an account?
                    <StyledLink to="/register">
                          Register
              </StyledLink>
                      </p>
                      <p onClick={() => { setModal(true) }}>Forgot password? </p>
                      {modal && <ModalPortal onClose={() => setModal(false)} />}
                    </ModalContentContainer>
                  </FormContainer>
                </Form>
              )}
            </Formik>

          )}
        {hasError && <h3>Something went wrong</h3>}
      </PageContainer>
    </Layout>
  )
}
