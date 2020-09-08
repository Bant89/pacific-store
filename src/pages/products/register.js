import React from "react"
import * as Yup from "yup"
import useStore from "hooks/useStore"
import { Formik, Form } from "formik"
import Field, { SelectField, FileUploader } from "components/Field"
import { Layout } from "components/Layout"
import {
    MainFormContainer,
    FormContainer,
    FieldSection,
    ActionSection,
} from "styles/formStyles";

const RegisterProductSchema = Yup.object().shape({
    title: Yup.string().required("Requerido"),
    price: Yup.number().positive().required("Requerido"),
    amount: Yup.number().positive().required("Requerido"),
    description: Yup.string().required("Requerido"),
    category: Yup.string().required("Requerido"),
    image: Yup.mixed()
})

export default function StoreRegister() {
    const { createStore, loading, error, updateImage } = useStore()
    return (
        <Layout>
            <MainFormContainer>
                {loading && <strong>Validando los datos</strong>}
                {error !== null && <strong>Algo salió mal</strong>}
                <h1>Crea un producto</h1>
                <Formik
                    initialValues={{
                        title: "",
                        description: "",
                        category: "",
                        amount: 0,
                        price: 0,
                        image: ""
                    }}
                    validationSchema={RegisterProductSchema}
                    onSubmit={(values) => {
                        createStore(values)
                        updateImage(values.image)
                    }}
                >
                    {({ setFieldValue, errors, touched }) => (
                        <Form>
                            <FormContainer>
                                <FieldSection>
                                    <Field
                                        name="title"
                                        label="Nombre"
                                        errorMessage={errors.title}
                                        isTouched={touched.title}
                                    />
                                    <Field
                                        name="description"
                                        label="Descripción de la tienda"
                                        errorMessage={errors.description}
                                        isTouched={touched.description}
                                    />
                                    <SelectField
                                        name="category"
                                        label="Categoría de la tienda"
                                        errorMessage={errors.category}
                                        isTouched={touched.category}
                                    >
                                        <option value="Tecnología">Tecnología</option>
                                        <option value="Alimentos">Alimentos</option>
                                        <option value="Moda">Moda</option>
                                        <option value="Deportiva">Deportiva</option>
                                        <option value="Música">Música</option>
                                    </SelectField>
                                    <Field
                                        name="amount"
                                        label="Cantidad disponible"
                                        errorMessage={errors.amount}
                                        isTouched={touched.amount}
                                    />
                                    <Field
                                        name="price"
                                        label="Precio"
                                        errorMessage={errors.price}
                                        isTouched={touched.price}
                                    />
                                    <FileUploader setValue={setFieldValue} />
                                </FieldSection>
                                <ActionSection>
                                    <button type="submit">Crear tienda</button>
                                </ActionSection>
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </MainFormContainer>
        </Layout>
    )
}
