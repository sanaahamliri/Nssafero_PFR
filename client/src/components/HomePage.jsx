import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Bienvenue sur Nssaferou</h1>
      <p>Voyagez de manière écologique et économique</p>

      <div className="auth-buttons">
        <Link to="/signup">
          <button>S'inscrire</button>
        </Link>
        <Link to="/login">
          <button>Se connecter</button>
        </Link>
      </div>

      <section className="popular-rides">
        <h2>Trajets populaires</h2>
      </section>

      <section className="community-events">
        <h2>Événements communautaires</h2>
      </section>
    </div>
  )
}

export default HomePage

