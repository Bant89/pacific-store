import axios from "axios"

export default function registerProductService({ title, description, category, amount, price, storeId }) {
    const ENDPOINT = `http://localhost:3000/stores/${storeId}/products`
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }
    return axios
        .post(ENDPOINT, {
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
