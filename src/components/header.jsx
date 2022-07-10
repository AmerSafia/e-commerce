import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <div>
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                  {!isLogged && <Link to="/login"> Sign in</Link>}{" "}
                  {isLogged && <Link to="/">logout</Link>}{" "}
                    <Link to="#">FAQs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3"></div>
            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/add-product">add-product</Link>
                  </li>
                  <li>
                    <Link to="#">Pages</Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="./about.html">About Us</Link>
                      </li>
                      <li>
                        <Link to="./shop-details.html">Shop Details</Link>
                      </li>
                      <li>
                        <Link to="./shopping-cart.html">Shopping Cart</Link>
                      </li>
                      <li>
                        <Link to="./checkout.html">Check Out</Link>
                      </li>
                      <li>
                        <Link to="./blog-details.html">Blog Details</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="./contact.html">Contacts</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
