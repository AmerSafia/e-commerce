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
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/product-details" component={ProductDetails} />
          <Route path="/edit-product/:id" component={AddProduct} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
