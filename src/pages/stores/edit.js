import React from "react"
import * as Yup from "yup"
import useStore from "hooks/useStore"
import { Formik, Form } from "formik"
import Field, { SelectField, FileUploader } from "components/Field"
import { Layout } from "components/Layout"
import StoreViewer from "components/StoreViewer"

const UpdateStoreSchema = Yup.object().shape({
    name: Yup.string(),
    description: Yup.string(),
    category: Yup.string(),
    image: Yup.mixed()
})

export default function StoreUpdate() {
    const { updateStore, loading, error, updateImage } = useStore()
    return (
        <Layout>
            <StoreViewer />
        </Layout>
    )
}
