import axios from "axios"
const ENDPOINT = "http://localhost:3000/users"

export default function registerService({ name, password, email }) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  return axios
    .post(
      ENDPOINT,
      {
        name,
        password,
        password_confirmation: password,
        email,
        is_admin: false,
      },
      config
    )
    .then(res => {
      if (res.status !== 200) throw new Error("Response is not ok")
      return res.data
    })
}
