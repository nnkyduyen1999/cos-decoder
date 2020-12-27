import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/home";
import Search from "./pages/search";
import ProductDetails from "./pages/ProductDetails/product-details";
import Login from "./pages/Login/login";

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/search" exact component={Search}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/product/1" exact component={ProductDetails}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
