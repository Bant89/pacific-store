import { useState, useEffect } from "react"
import useUser from "./useUser"
import useLocalStorage from "./useLocalStorage"
import getUserStoreService from "services/users/getStore"
import registerStoreService from "services/stores/register"
import updateStoreService from "services/stores/update"
import uploadImageService from "services/stores/uploadImage"

export default function useStore() {
    const [storeId, setStoreId] = useLocalStorage("store-id", "")
    const { userId } = useUser()
    const [store, setStore] = useState({})
    const [requestState, setRequestState] = useState({
        loading: false,
        error: null
    })
    const [data, setData] = useState(null)

    useEffect(() => {
        if (userId) {
            getUserStoreService(userId)
                .then(result => setStore(result))
                .catch(err => console.error(err))
        }
    }, [userId])

    const createStore = ({ name, description, category }) => {
        setRequestState({ loading: true, error: null })
        registerStoreService({ name, description, category, userId })
            .then(res => {
                setData(res)
                setStoreId(res.id)
                setRequestState({ loading: false, error: null })
            })
            .catch(err => {
                setRequestState({ loading: false, error: err })
            })
    }

    const updateStore = ({ name, description, category }) => {
        setRequestState({ loading: true, error: null })
        updateStoreService({ name, description, category, storeId })
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
        storeId,
        store,
        createStore,
        updateStore,
        updateImage,
        loading: requestState.loading,
        error: requestState.error,
        data
    }
}
