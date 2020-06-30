import axios from "axios"
const ENDPOINT = "http://localhost:3000/auth/login"

export default function loginService({ email, password }) {
  let config = {
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
    .then(data => {
      return data.auth_token
    })

  // return fetch(ENDPOINT, {
  //   method: "POST",
  //   body: JSON.stringify({ email, password }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then(res => {
  //     if (!res.ok) throw new Error("Response is not ok")
  //     return res.json()
  //   })
  //   .then(data => {
  //     return data.auth_token
  //   })
}
