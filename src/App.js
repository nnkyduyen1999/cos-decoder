import { Route, Router, Switch } from "react-router-dom";
import Search from "./pages/search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/search" exact component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
