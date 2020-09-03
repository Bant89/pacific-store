
import axios from "axios"

export default function updateStoreService({ name, description, category, storeId }) {
    const ENDPOINT = `http://localhost:3000/stores/${storeId}`
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }
    return axios
        .put(ENDPOINT, {
            title: name,
            description,
            category
        }, config)
        .then(res => {
            return res.data
        })
}
