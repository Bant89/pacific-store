import { useCallback, useContext } from "react"
import Context from "context/UserContext"
import loginService from "services/login"

export default function useUser() {
  const { token, setToken } = useContext(Context)

  const login = useCallback(
    ({ email, password }) => {
      loginService({ email, password })
        .then(token => setToken(token))
        .catch(err => console.error(err))
    },
    [setToken]
  )

  const logout = useCallback(() => {
    setToken(null)
  }, [setToken])

  return {
    isLogged: Boolean(token),
    login,
    logout,
  }
}
