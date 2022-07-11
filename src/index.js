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
import Footer from "./components/footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/my-products/:id" component={App} />
          <Route path="/add-product" component={AddProduct} />
          <Route path="/edit-product/:id" component={AddProduct} />
          <Route path="/product-details" component={ProductDetails} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Redirect to='/' />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
