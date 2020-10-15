import axios from "axios"

export default function uploadImageService(storeId, file) {
    const apiBaseURL = `http://localhost:3000/photos/store/${storeId}`;
    const formData = new FormData()
    formData.append("file", file)
    return axios({
        method: "PUT",
        url: apiBaseURL,
        data: formData
    }).then(res => {
        console.log(res)
        return res
    })
        .catch(err => console.log(err))
}