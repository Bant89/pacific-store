import React, { useState, useEffect, createContext } from "react"
export const UserContext = createContext()

export function UserProvider({ children }) {

  const [user, setUser] = useState(() => ({ id: window.localStorage.getItem("user-id") }))

  const contextValue = {
    user,
    setUser
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

