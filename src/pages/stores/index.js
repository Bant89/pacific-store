import React from "react"
import { Link } from "gatsby"
import SEO from "components/seo"
import GridList from "components/GridList"
import CarouselList from "components/CarouselList"
import CategoryItem from "components/CategoryItem"
import ShortStoreCard from "components/ShortStoreCard"
import { Layout } from "components/Layout"
import { categories } from "utils/constants"

export default function StoreIndex() {

  let stores = []
  for (let i = 0; i < 6; i++) {
    stores.push(<ShortStoreCard />)
  }

  return (
    <Layout>
      <SEO title="Stores" />
      <h1>Stores</h1>
      <Link to="stores/register">Create a new store</Link>
      <section>
        <GridList name="Categorias" type="store" items={categories.map(cat => <CategoryItem content={cat} />)} />
      </section>
      <section>
        <CarouselList title="Más populares" items={stores} />
      </section>
      {/*<section>
        <GridList name="Recently created" type="store" />
      </section> */}
    </Layout>
  )
}
