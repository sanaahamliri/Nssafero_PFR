import SignupForm from "../components/SignupForm"
import { useAuth } from "../hooks/useAuth"

const SignupPage = () => {
  const { signup } = useAuth()

  return (
    <div className="signup-page">
      <h2>Inscription</h2>
      <SignupForm onSubmit={signup} />
    </div>
  )
}

export default SignupPage

