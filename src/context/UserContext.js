import React, { useState } from "react"

const Context = React.createContext({})

export function UserContextProvider({ children }) {
  const [token, setToken] = useState(() =>
    window.sessionStorage.getItem("auth_token")
  )
  const [userId, setUserId] = useState(() =>
    window.sessionStorage.getItem("user-id")
  )
  return (
    <Context.Provider value={{ token, setToken, userId, setUserId }}>{children}</Context.Provider>
  )
}

export default Context
