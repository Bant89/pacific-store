import React from "react"
import { Link } from "gatsby"
import SEO from "components/seo"
import GridList from "components/GridList"
import CarouselList from "components/CarouselList"
import { Layout } from "components/Layout"

export default function StoreIndex() {
  return (
    <Layout>
      <SEO title="Stores" />
      <h1>Stores</h1>
      <Link to="stores/register">Create a new store</Link>
      <section>
        <GridList name="Most selled" type="store" />
      </section>
      <section>
        <CarouselList title="Categories" />
      </section>
      <section>
        <GridList name="Recently created" type="store" />
      </section>
    </Layout>
  )
}
