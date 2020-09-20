import React from "react"
import { Link } from "gatsby"
import { Layout } from "components/Layout"
import Button from "components/Button"
import SEO from "components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Button>Probando</Button>
        <Button theme="inactive-primary">Probando</Button>
        <Button theme="secondary">Probando</Button>
        <Button theme="inactive-secondary">Probando</Button>
      </div>
      <Link to="/register/">Create new user</Link>
    </Layout>
  )
}

