/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { UserProvider } from "context/UserContext"
import { ShoppingContextProvider } from "context/ShoppingContext"

// You can delete this file if you're not using it

export function wrapRootElement({ element }) {
  return (
    <UserProvider>
      <ShoppingContextProvider>{element}</ShoppingContextProvider>
    </UserProvider>
  )
}
