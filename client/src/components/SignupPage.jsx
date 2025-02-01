import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "passenger",
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
      const response = await axios.post("http://localhost:5000/api/users/signup", formData)
      console.log("Signup successful:", response.data)
      localStorage.setItem("token", response.data.token)
      history.push("/dashboard")
    } catch (err) {
      setError(err.response?.data?.message || "Une erreur est survenue lors de l'inscription")
    }
  }

  return (
    <div className="signup-page">
      <h2>Inscription</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nom" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Mot de passe"
          required
        />
        <select name="userType" value={formData.userType} onChange={handleChange}>
          <option value="passenger">Passager</option>
          <option value="driver">Conducteur</option>
        </select>
        <button type="submit">S'inscrire</button>
      </form>
      <p>
        Déjà un compte ? <Link to="/login">Se connecter</Link>
      </p>
    </div>
  )
}

export default SignupPage

