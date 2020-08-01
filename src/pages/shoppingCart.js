import React from "react"
import { Layout } from "components/Layout"
import ShoppingItemList from "components/ShoppingItemList"
export default function ShoppingCart() {
  return (
    <Layout>
      <h1>Shopping Cart</h1>
      <ShoppingItemList />
    </Layout>
  )
}
