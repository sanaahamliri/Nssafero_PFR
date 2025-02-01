import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("")
  const history = useHistory()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", formData)
      console.log("Login successful:", response.data)
      localStorage.setItem("token", response.data.token)
      history.push("/dashboard")
    } catch (err) {
      setError(err.response?.data?.message || "Email ou mot de passe incorrect")
    }
  }

  return (
    <div className="login-page">
      <h2>Connexion</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />
        <button type="submit">Se connecter</button>
      </form>
      <p>
        Pas encore de compte ? <Link to="/signup">S'inscrire</Link>
      </p>
    </div>
  )
}

export default LoginPage

