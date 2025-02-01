import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./components/HomePage"
import SignupPage from "./components/SignupPage"
import LoginPage from "./components/LoginPage"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  )
}

export default App

