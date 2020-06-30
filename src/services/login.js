const ENDPOINT = "http://localhost:3000/auth/login"

export default function loginService({ email, password }) {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {
      if (!res.ok) throw new Error("Response is not ok")
      return res.json()
    })
    .then(data => {
      return data.auth_token
    })
}
