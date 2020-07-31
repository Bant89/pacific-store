import React, { useState } from "react"
import {
  Card,
  ItemImage,
  ItemInfoSection,
  ItemButtonsSection,
  QuantityButton,
  StyledInput,
} from "./styles"

export default function ShoppingItem({ element, changePrice, changeAmount }) {
  const [quantity, setQuantity] = useState(1)
  const { name, price } = element
  const increment = () => {
    setQuantity(state => state + 1)
    changePrice(currentPrice => currentPrice + price)
    changeAmount(state => state + 1)
  }

  const decrement = () => {
    setQuantity(state => state - 1)
    changePrice(currentPrice => currentPrice - price)
    changeAmount(state => state - 1)
  }

  return (
    <Card>
      <ItemImage src="https://loremflickr.com/150/150" alt="item image" />
      <ItemInfoSection>
        <h4>Product: {name}</h4>
        <h4>Price: ${price}</h4>
        <h4>Quantity: {quantity}</h4>
        <h4>Total: ${(quantity * price).toFixed(2)}</h4>
      </ItemInfoSection>
      <ItemButtonsSection>
        <QuantityButton onClick={increment}>+</QuantityButton>
        <StyledInput type="text" placeholder="1" value={quantity} readOnly />
        <QuantityButton onClick={decrement}>-</QuantityButton>
      </ItemButtonsSection>
    </Card>
  )
}
