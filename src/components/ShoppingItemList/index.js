import React from "react"
import ShoppingItem from "components/ShoppingItem"
import { ProductsContainer, Summary, Container } from "./styles"

export default function ShoppingItemList({
  quantityOfItems,
  sumOfPrices,
  shoppingItems,
  setSumOfPrices,
  setQuantityOfItems,
  setConfirm,
}) {
  return (
    <Container>
      <Summary>
        <h2>Summary</h2>
        <h3>Amount of items: {quantityOfItems}</h3>
        <h3>Total: $ {sumOfPrices.toFixed(2)}</h3>
        <button onClick={() => setConfirm(true)}>Continue to checkout</button>
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
