import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/search" exact component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
