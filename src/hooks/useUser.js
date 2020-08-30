import { useCallback, useState } from "react"
import loginService from "services/login"
import registerService from "services/register"
import uploadImageService from "services/uploadImage"
import useLocalStorage from "hooks/useLocalStorage"

export default function useUser() {
  const [userId, setUserId] = useLocalStorage("user-id", "")
  const [, setImageUrl] = useLocalStorage("imageUrl", "")
  const [, setToken] = useLocalStorage("auth_token", "")
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
          setLoadingState({ loading: false, error: false })
          setToken(token)
        })
        .catch(err => {
          setToken(null)
          setLoadingState({ loading: false, error: true })
          console.error(err)
        })
    },
    [setToken, setLoadingState]
  )

  const createUser = useCallback(
    async ({ name, email, password, image }) => {
      setCreationState({ loading: true, error: null })
      let userId = null
      try {
        const data = await registerService({ name, email, password })
        const { user } = data
        setUserId(user.id)
        setCreationState({ loading: false, error: null })
        userId = user.id
      } catch (err) {
        setUserId(null)
        setToken(null)
        setCreationState({ loading: false, error: err })
        console.error(err)
      }

      if (userId !== null) {
        try {
          const result = await uploadImageService(userId, image)
          const { data } = result
          const { image_url } = data
          setImageUrl(image_url)
        } catch (err) {
          console.log('Image error')
          console.error(err)
        }
      }

    },
    [setCreationState, setImageUrl, setUserId, setToken]
  )

  const logout = useCallback(() => {
    setUserId(null)
    setToken(null)
  }, [setUserId, setToken])

  return {
    isLogged: Boolean(userId),
    isLoginLoading: loadingState.loading,
    hasError: loadingState.error,
    isCreationLoading: creationState.loading,
    creationHasError: creationState.error,
    login,
    createUser,
    logout
  }
}
