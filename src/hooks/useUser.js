import { useContext, useEffect, useState, useCallback } from "react"
import useLocalStorage from "hooks/useLocalStorage"
import { UserContext } from "context/UserContext"
import getUserService from "services/users/getUser"
import loginService from "services/users/login"
import registerService from "services/users/register"
import uploadImageService from "services/users/uploadImage"

export default function useUser() {
  const { user, setUser } = useContext(UserContext)
  const [userId, setUserId] = useLocalStorage("user-id", "")
  const [token, setToken] = useLocalStorage("auth_token", "")
  const [isLogged, setIsLogged] = useState(false)
  const [loadingState, setLoadingState] = useState({
    loading: false,
    error: false,
  })

  useEffect(() => {
    if (!!user?.id) {
      getUserService(user.id)
        .then(result => {
          if (result)
            setUser(result)
        })
        .catch(err => console.error(err))
    }
  }, [])

  useEffect(() => {
    checkIfLogged()
  }, [user])

  const [creationState, setCreationState] = useState({
    loading: false,
    error: null,
  })

  const login = useCallback(
    ({ email, password }) => {
      setLoadingState({ loading: true, error: false })
      loginService({ email, password })
        .then(res => {
          if (res) {
            setToken(res.auth_token)
            setUserId(res.user?.id)
            setUser(res.user)
          }
          setLoadingState({ loading: false, error: false })
        })
        .catch(err => {
          setLoadingState({ loading: false, error: true })
          console.error(err)
        })
    },
    [setToken, setLoadingState, setUserId, setUser]
  )

  const createUser = useCallback(
    async ({ name, email, password, image }) => {
      setCreationState({ loading: true, error: null })
      let userId = null
      try {
        const data = await registerService({ name, email, password })
        const { user } = data
        setUserId(user.id)
        setUser(user)
        setCreationState({ loading: false, error: null })
      } catch (err) {
        setCreationState({ loading: false, error: err })
        console.error(err)
      }

      if (userId !== null) {
        try {
          const result = await uploadImageService(userId, image)
          const { data } = result
          const { image_url } = data
          setUser(curUser => ({ ...curUser, avatar_url: image_url }))
        } catch (err) {
          console.log('Image error')
          console.error(err)
        }
      }

    },
    [setCreationState, setUser, setUserId]
  )

  const logout = useCallback(() => {
    setToken("")
    setUser({})
    setUserId("")
  }, [setUser, setToken, setUserId])

  const checkIfLogged = () => {
    if (typeof user !== Object)
      setIsLogged(false)

    if (Object.keys(user).length !== 0) {
      setIsLogged(true)
      return;
    }

    setIsLogged(false)
  }

  return {
    isLogged: isLogged,
    isLoginLoading: loadingState.loading,
    hasError: loadingState.error,
    isCreationLoading: creationState.loading,
    creationHasError: creationState.error,
    userId: user?.id,
    user,
    token,
    login,
    createUser,
    logout
  }
}
