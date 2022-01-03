import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar/Navbar";
import SideDrawer from "./components/sidedrawer/SideDrawer";
import Backdrop from "./components/backdrop/Backdrop";

// Screens
import HomeScreen from "./screens/homescreen/HomeScreen";
import ProductScreen from "./screens/productsceen/ProductScreen";
import CartScreen from "./screens/cartscreen/CartScreen";

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <div className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart" component={CartScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
