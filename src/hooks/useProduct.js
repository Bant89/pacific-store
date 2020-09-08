import { useState } from "react"
import useStore from "./useStore"
import registerProductService from "../services/products/register"
import updateProductService from "../services/products/update"
import uploadImageService from "../services/products/uploadImage"

export default function useProduct() {
    const { storeId } = useStore()
    const [requestState, setRequestState] = useState({
        loading: false,
        error: null
    })
    const [data, setData] = useState(null)

    const createProduct = ({ title, description, category, amount, price }) => {
        setRequestState({ loading: true, error: null })
        registerProductService({ title, description, category, amount, price, storeId })
            .then(res => {
                setData(res)
                setRequestState({ loading: false, error: null })
            })
            .catch(err => {
                setRequestState({ loading: false, error: err })
            })
    }

    const updateProduct = ({ title, description, category, amount, price, productId }) => {
        setRequestState({ loading: true, error: null })
        updateProductService({ title, description, category, amount, price, storeId, productId })
            .then(res => {
                setData(res)
                setRequestState({ loading: false, error: null })
            })
            .catch(err => {
                setRequestState({ loading: false, error: err })
            })
    }

    const updateImage = ({ image }) => {
        setRequestState({ loading: true, error: null })
        uploadImageService({ storeId, image })
            .then(res => {
                setData(res)
                setRequestState({ loading: false, error: null })
            })
            .catch(err => {
                setRequestState({ loading: false, error: err })
            })
    }

    return {
        createProduct,
        updateProduct,
        updateImage,
        loading: requestState.loading,
        error: requestState.error,
        data
    }
}
