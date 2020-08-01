import React, { useState } from "react"

const Context = React.createContext({})

export function ShoppingContextProvider({ children }) {
  const [shoppingItems, setShoppingItems] = useState([])

  return (
    <Context.Provider value={{ shoppingItems, setShoppingItems }}>
      {children}
    </Context.Provider>
  )
}

export default Context
