import { useCallback, useContext, useState } from "react"
import Context from "context/UserContext"
import loginService from "services/login"
import registerService from "services/register"

export default function useUser() {
  const { token, setToken } = useContext(Context)
  const [loadingState, setLoadingState] = useState({
    loading: false,
    error: false,
  })
  const [creationState, setCreationState] = useState({
    loading: false,
    error: null,
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

  const createUser = useCallback(
    ({ name, password, email }) => {
      setCreationState({ loading: true, error: null })
      registerService({ name, password, email })
        .then(data => {
          window.sessionStorage.setItem("auth_token", data.auth_token)
          setCreationState({ loading: false, error: null })
          setToken(token)
        })
        .catch(err => {
          window.sessionStorage.removeItem("auth_token")
          setCreationState({ loading: false, error: err })
          console.error(err)
        })
    },
    [token, setToken, setCreationState]
  )

  const logout = useCallback(() => {
    window.sessionStorage.removeItem("auth_token")
    setToken(null)
  }, [setToken])

  return {
    isLogged: Boolean(token),
    isLoginLoading: loadingState.loading,
    hasError: loadingState.error,
    isCreationLoading: creationState.loading,
    creationHasError: creationState.error,
    login,
    createUser,
    logout,
  }
}
