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
import Footer from "./components/footer";
import store from "./store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Redirect to="/" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
