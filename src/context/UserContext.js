import React, { useState, createContext } from "react"
export const UserContext = createContext()

export function UserProvider({ children }) {

  const [user, setUser] = useState(() => {
    let id = window.localStorage.getItem("user-id")
    if (id !== null && id !== "")
      return ({ id: id })
    else
      return ({})
  })

  const contextValue = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

