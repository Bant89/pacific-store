import React, { useState, useEffect } from "react"
import useShoppingCart from "hooks/useShoppingCart"
import ShoppingItem from "components/ShoppingItem"
import { ProductsContainer, Summary, Container } from "./styles"

export default function ShoppingItemList() {
  const { shoppingItems } = useShoppingCart()
  const [sumOfPrices, setSumOfPrices] = useState(0)
  const [quantityOfItems, setQuantityOfItems] = useState(shoppingItems.length)
  let sum = 0
  for (let i = 0; i < shoppingItems.length; i++) {
    sum += shoppingItems[i].price
  }
  useEffect(() => {
    setSumOfPrices(sum)
  }, [setSumOfPrices])
  return (
    <Container>
      <Summary>
        <h2>Summary</h2>
        <h3>Amount of items: {quantityOfItems}</h3>
        <h3>Total: $ {sumOfPrices.toFixed(2)}</h3>
      </Summary>
      <ProductsContainer>
        {shoppingItems.map(item => (
          <ShoppingItem
            element={item}
            changePrice={setSumOfPrices}
            changeAmount={setQuantityOfItems}
            key={item.id}
          />
        ))}
      </ProductsContainer>
    </Container>
  )
}
