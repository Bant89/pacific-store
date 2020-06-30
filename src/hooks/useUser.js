import { useCallback, useContext } from "react"
import Context from "context/UserContext"

export default function useUser() {
  const { token, setToken } = useContext(Context)

  const login = useCallback(() => {
    setToken("prueba")
  }, [setToken])

  const logout = useCallback(() => {
    setToken(null)
  }, [setToken])

  return {
    isLogged: Boolean(token),
    login,
    logout,
  }
}
