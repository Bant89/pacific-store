/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react"
import { UserContextProvider } from "context/UserContext"

// You can delete this file if you're not using it

export function wrapRootElement({ element }) {
  return <UserContextProvider>{element}</UserContextProvider>
}
