import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddProduct from "./pages/add-product";
import Header from "./components/header";
import { Login } from "./pages/login";
import Signup from "./pages/signup";
import ProductDetails from "./components/product-details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/product-details" component={ProductDetails} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
