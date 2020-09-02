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

const UpdateStoreSchema = Yup.object().shape({
    name: Yup.string(),
    description: Yup.string(),
    category: Yup.string(),
    image: Yup.mixed()
})

export default function StoreUpdate() {
    const { updateStore, loading, error, data } = useStore()
    return (
        <Layout>
            <MainFormContainer>

                {loading && <strong>Validando los datos</strong>}
                {error !== null && <strong>Algo salió mal, intente denuevo</strong>}
                <h1>Editar tu tienda de Pacific Stores</h1>
                <Formik
                    initialValues={{
                        name: "",
                        description: "",
                        category: "",
                        image: ""
                    }}
                    validationSchema={UpdateStoreSchema}
                    onSubmit={(values) => {
                        updateStore(values)
                        console.log('Values')
                        console.log(values)
                        console.log('Data')
                        console.log(data)
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
                                    <FileUploader setValue={setFieldValue} />
                                </FieldSection>
                                <ActionSection>
                                    <button type="submit">Actualizar tienda</button>
                                </ActionSection>
                            </FormContainer>
                        </Form>
                    )}
                </Formik>
            </MainFormContainer>
        </Layout>
    )
}
