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
  const [quantity, setQuantity] = useState(element.selectedQuantity)
  const { name, price } = element
  const increment = () => {
    if (quantity + 1 > element.quantity) {
      alert("Cant order more items, out of stock")
      return
    }
    setQuantity(state => state + 1)
    changePrice(currentPrice => currentPrice + price)
    changeAmount(state => state + 1)
    element.selectedQuantity++
  }

  const decrement = () => {
    if (quantity - 1 == 0) {
      alert("Cant order negative items")
      return
    }
    setQuantity(state => state - 1)
    changePrice(currentPrice => currentPrice - price)
    changeAmount(state => state - 1)
    element.selectedQuantity--
  }

  return (
    <Card>
      <ItemImage src="./images/productPlaceholder.jpg" alt="item image" />
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
