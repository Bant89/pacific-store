import React from "react"
import { Link } from "gatsby"
import { Layout } from "components/Layout"
import Button from "components/Button"
import SEO from "components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Inicio de usuario" />

      <Link to="/register/">Create new user</Link>
    </Layout>
  )
}

