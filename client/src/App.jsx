import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from "./components/HomePage"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App

