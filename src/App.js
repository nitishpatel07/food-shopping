import React from "react";
import Home from "./pages/home/Home ";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./ProtectedRoutes";

const App = () => {
  return (
    <div className="container">
      <ToastContainer />
      <Router>
        <Switch>
          <ProtectedRoutes exact path="/" component={Home} />
          <ProtectedRoutes exact path="/cart" component={Cart} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
