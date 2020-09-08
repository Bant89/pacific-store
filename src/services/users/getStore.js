import axios from "axios"

export default function getUserStoreService(id) {
    const ENDPOINT = `http://localhost:3000/stores/users/${id}`
    return axios.get(ENDPOINT)
        .then(res => res.data)

}
