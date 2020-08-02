import React from "react"
import { navigate } from "gatsby"
export default function OrderConfirmation({
  quantityOfItems,
  sumOfPrices,
  setConfirm,
}) {
  const handlePayment = () => {
    alert("Payment done succesfully")
    navigate("/")
  }

  return (
    <>
      <h2>Confirmation</h2>
      <h3>Total of items: </h3>
      <p>{quantityOfItems}</p>
      <h3>Order Total: </h3>
      <p>$ {sumOfPrices}</p>
      <button onClick={() => setConfirm(false)}>
        Go back to change something
      </button>
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
      <button onClick={handlePayment}>Pay</button>
    </>
  )
}
