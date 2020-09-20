import React from "react"
import { Link } from "gatsby"
import SEO from "components/seo"
import GridList from "components/GridList"
import CarouselList from "components/CarouselList"
import CategoryItem from "components/CategoryItem"
import ShortStoreCard from "components/ShortStoreCard"
import LongStoreCard from "components/LongStoreCard"
import LongCardList from "components/LongCardList"
import { Layout } from "components/Layout"
import { categories } from "utils/constants"

export default function StoreIndex() {

  let stores = [], longCards = []
  for (let i = 0; i < 6; i++) {
    stores.push(<ShortStoreCard />)
  }

  for (let i = 0; i < 3; i++) {
    longCards.push(<LongStoreCard />)
  }

  return (
    <Layout>
      <SEO title="Tiendas" />
      <section>
        <GridList name="Categorias" type="store" items={categories.map(cat => <CategoryItem content={cat} />)} />
      </section>
      <section>
        <CarouselList title="Más populares" items={stores} />
      </section>
      <section>
        <LongCardList items={longCards} />
      </section>
    </Layout>
  )
}
