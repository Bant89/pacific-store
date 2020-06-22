import React from "react"
import { Layout } from "components/Layout"
import SEO from "components/seo"
import GridList from "components/GridList"

export default function Products() {
  return (
    <Layout>
      <SEO title="Products" />
      <GridList />
      <section></section>
      <section></section>
    </Layout>
  )
}
