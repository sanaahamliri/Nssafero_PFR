import { useState } from "react"
import { Link } from "react-router-dom"

const SignupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "passenger",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">S'inscrire</button>
      <p>
        Déjà un compte ? <Link to="/login">Se connecter</Link>
      </p>
    </form>
  )
}

export default SignupForm

