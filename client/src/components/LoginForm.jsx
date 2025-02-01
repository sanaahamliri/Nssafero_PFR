import { useState } from "react"
import { Link } from "react-router-dom"

const LoginForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      {/* Form fields */}
      <button type="submit">Se connecter</button>
      <p>
        Pas encore de compte ? <Link to="/signup">S'inscrire</Link>
      </p>
    </form>
  )
}

export default LoginForm

