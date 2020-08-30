import { useContext } from "react"
import Context from "context/ShoppingContext"

export default function useShoppingCart() {
  const { shoppingItems, setShoppingItems } = useContext(Context)

  const addItem = element => {
    setShoppingItems(items => [...items, element])
  }

  const removeItem = ({ id }) => {
    setShoppingItems(items => items.filter(element => element.id !== id))
  }

  const removeAllItems = () => setShoppingItems([])

  return {
    addItem,
    removeItem,
    removeAllItems,
    shoppingItems,
  }
}
