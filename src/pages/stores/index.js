import React from "react"
import { Link } from "gatsby"
import { Layout } from "components/Layout"

export default function StoreIndex() {
  return (
    <Layout>
      <h1>Stores</h1>
      <Link to="stores/register">Create a new store</Link>
    </Layout>
  )
}
