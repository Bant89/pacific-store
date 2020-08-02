import React, { useState, useEffect } from "react"
import useShoppingCart from "hooks/useShoppingCart"
import { Layout } from "components/Layout"
import ShoppingItemList from "components/ShoppingItemList"
import OrderConfirmation from "components/OrderConfirmation"

export default function ShoppingCart() {
  const { shoppingItems } = useShoppingCart()
  const [sumOfPrices, setSumOfPrices] = useState(0)
  const [quantityOfItems, setQuantityOfItems] = useState(shoppingItems.length)
  const [confirmBuy, setConfirm] = useState(false)
  let props = {
    quantityOfItems,
    sumOfPrices,
    shoppingItems,
    setSumOfPrices,
    setQuantityOfItems,
    setConfirm,
  }
  let sum = 0
  for (let i = 0; i < shoppingItems.length; i++) {
    sum += shoppingItems[i].price
  }
  useEffect(() => {
    setSumOfPrices(sum)
  }, [setSumOfPrices, sum])

  return (
    <Layout>
      <h1>Shopping Cart</h1>
      {!confirmBuy && <ShoppingItemList {...props} />}
      {confirmBuy && (
        <OrderConfirmation
          quantityOfItems={quantityOfItems}
          sumOfPrices={sumOfPrices}
          setConfirm={setConfirm}
        />
      )}
    </Layout>
  )
}
