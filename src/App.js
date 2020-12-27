import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import Search from "./pages/search";
import Login from "./pages/Login/login";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/login" exact component={Login} />

          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
