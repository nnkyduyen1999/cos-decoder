import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/home";
import Search from "./pages/Search/search";
import ProductDetails from "./pages/ProductDetails/product-details";
import Login from "./pages/Login/login";
import {AuthenticationProvider} from "./provider/authProvider";

function App() {
  return (
    <div>
      <AuthenticationProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search" exact component={Search} />
          <Route path="/login" exact component={Login} />
          <Route path="/product/1" exact component={ProductDetails} />
        </Switch>
      </Router>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
