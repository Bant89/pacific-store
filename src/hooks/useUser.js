import { useCallback, useContext, useState } from "react"
import Context from "context/UserContext"
import loginService from "services/login"

export default function useUser() {
  const { token, setToken } = useContext(Context)
  const [loadingState, setLoadingState] = useState({
    loading: false,
    error: false,
  })
  const login = useCallback(
    ({ email, password }) => {
      setLoadingState({ loading: true, error: false })
      loginService({ email, password })
        .then(token => {
          window.sessionStorage.setItem("auth_token", token)
          setLoadingState({ loading: false, error: false })
          setToken(token)
        })
        .catch(err => {
          window.sessionStorage.removeItem("auth_token")
          setLoadingState({ loading: false, error: true })
          console.error(err)
        })
    },
    [setToken, setLoadingState]
  )

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("auth_token")
    setToken(null)
  }, [setToken])

  return {
    isLogged: Boolean(token),
    isLoginLoading: loadingState.loading,
    hasError: loadingState.error,
    login,
    logout,
  }
}
