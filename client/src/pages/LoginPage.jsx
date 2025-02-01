import LoginForm from "../components/LoginForm"
import { useAuth } from "../hooks/useAuth"

const LoginPage = () => {
  const { login } = useAuth()

  return (
    <div className="login-page">
      <h2>Connexion</h2>
      <LoginForm onSubmit={login} />
    </div>
  )
}

export default LoginPage

