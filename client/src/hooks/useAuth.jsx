import { useState, useCallback } from "react"
import { useHistory } from "react-router-dom"
import { signupUser, loginUser } from "../services/authService"

export const useAuth = () => {
  const [error, setError] = useState(null)
  const history = useHistory()

  const signup = useCallback(
    async (userData) => {
      try {
        const data = await signupUser(userData)
        localStorage.setItem("token", data.token)
        history.push("/dashboard")
      } catch (err) {
        setError(err.message)
      }
    },
    [history],
  )

  const login = useCallback(
    async (credentials) => {
      try {
        const data = await loginUser(credentials)
        localStorage.setItem("token", data.token)
        history.push("/dashboard")
      } catch (err) {
        setError(err.message)
      }
    },
    [history],
  )

  return { signup, login, error }
}

