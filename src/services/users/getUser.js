import axios from "axios"

export default function getUserService(id) {
    const ENDPOINT = `http://localhost:3000/users/${id}`
    return axios.get(ENDPOINT)
        .then(res => res.data)

}
