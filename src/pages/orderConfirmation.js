import React from "react"
import { Layout } from "components/Layout"
export default function OrderConfirmation() {
  return (
    <Layout>
      <h1>Shopping Cart Confirmation</h1>
      <h3>Order Total: </h3>
      <p>$ 150.50</p>
      <h3>Shipping Address: </h3>
      <p>
        lorem ipsum dolor sae lorem ipsum dolor sae lorem ipsum dolor sae lorem
        ipsum dolor sae lorem ipsum dolor sae
      </p>
      <h3>Payment Card: </h3>
      <select>
        <option value="7034">7034</option>
        <option value="9082">9082</option>
        <option value="1403">1403</option>
      </select>
      <button>Pay</button>
    </Layout>
  )
}
