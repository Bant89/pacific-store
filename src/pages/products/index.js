import React from "react"
import { Layout } from "components/Layout"
import SEO from "components/seo"
import GridList from "components/GridList"
import CarouselList from "components/CarouselList"

export default function ProductIndex() {
  return (
    <Layout>
      <SEO title="Products" />
      <section>
        <GridList />
      </section>
      <section>
        <CarouselList title="Categories" />
      </section>
      <section>
        <GridList />
      </section>
    </Layout>
  )
}
