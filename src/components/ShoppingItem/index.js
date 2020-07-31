import React, { useState } from "react"
import {
  Card,
  ItemImage,
  ItemInfoSection,
  ItemButtonsSection,
  QuantityButton,
  StyledInput,
} from "./styles"

export default function ShoppingItem({ element }) {
  const [quantity, setQuantity] = useState(1)

  const handleChange = e => {
    setQuantity(parseInt(e.target.value))
  }

  const increment = () => setQuantity(state => state + 1)
  const decrement = () => setQuantity(state => state - 1)

  return (
    <Card>
      <ItemImage src="https://loremflickr.com/150/150" alt="item image" />
      <ItemInfoSection>
        <h4>Product: {element.name}</h4>
        <h4>Price: ${element.price}</h4>
        <h4>Quantity: {quantity}</h4>
        <h4>Total: ${quantity * element.price}</h4>
      </ItemInfoSection>
      <ItemButtonsSection>
        <QuantityButton onClick={increment}>+</QuantityButton>
        <StyledInput
          type="text"
          placeholder="1"
          value={quantity}
          onChange={handleChange}
        />
        <QuantityButton onClick={decrement}>-</QuantityButton>
      </ItemButtonsSection>
    </Card>
  )
}
