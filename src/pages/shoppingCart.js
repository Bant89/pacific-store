import React from "react"
import useShoppingCart from "hooks/useShoppingCart"
import { Layout } from "components/Layout"

export default function ShoppingCart() {
  const { shoppingItems } = useShoppingCart()
  return (
    <Layout>
      <h1>Shopping Cart</h1>
      <h2>{shoppingItems.length}</h2>
    </Layout>
  )
}
