import axios from "axios"
const ENDPOINT = "http://localhost:3000/stores"

export default function registerStoreService({ name, description, category, userId }) {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }
    return axios
        .post(ENDPOINT, {
            title: name,
            description,
            category,
            user_id: userId
        }, config)
        .then(res => {
            return res.data
        })
}
