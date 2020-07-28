import React from "react"
import { Link } from "gatsby"
import { Layout } from "components/Layout"
import Image from "components/image"
import SEO from "components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/register/">Create new user</Link>
    </Layout>
  )
}

