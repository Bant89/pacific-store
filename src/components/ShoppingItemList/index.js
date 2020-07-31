import React from "react"
import useShoppingCart from "hooks/useShoppingCart"
import ShoppingItem from "components/ShoppingItem"
import { Container } from "./styles"

export default function ShoppingItemList() {
  const { shoppingItems } = useShoppingCart()
  let list = []
  for (let i = 0; i < shoppingItems.length; i++) {
    list.push(<ShoppingItem element={shoppingItems[i]} />)
  }
  return <Container>{list}</Container>
}
