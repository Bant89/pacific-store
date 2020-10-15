
import axios from "axios"

export default function updateStoreService({ title, description, category, amount, price, storeId, productId }) {
    const ENDPOINT = `http://localhost:3000/stores/${storeId}/products/${productId}`
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }
    return axios
        .put(ENDPOINT, {
            title,
            description,
            category,
            amount,
            price
        }, config)
        .then(res => {
            return res.data
        })
}
