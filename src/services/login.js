import axios from "axios"
const ENDPOINT = "http://localhost:3000/auth/login"

export default function loginService({ email, password }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }
  return axios
    .post(ENDPOINT, { email, password }, config)
    .then(res => {
      if (res.status !== 200) throw new Error("Response is not ok")
      return res.data
    })
}
