import axios from "axios"
const ENDPOINT = "http://localhost:3000/auth/login"

export function registerStoreService({ name, description, image }) {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    }
    return axios
        .post(ENDPOINT, {
            title: name,
            description,
            image,
            category
        }, config)
        .then(res => {
            if (res.status !== 200) throw new Error("Response is not ok")
            return res.data
        })
        .then(data => {
            return data.auth_token
        })
}
