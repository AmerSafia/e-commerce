import "./header.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";


const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const logOut = () => {
    dispatch(logout());
    history.push("/");
  };
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
                    {!user && (
                      <>
                        <Link to="/signup" href="">
                          signup{" "}
                        </Link>
                        <Link to="/login">login</Link>
                      </>
                    )}{" "}
                    {user && (
                      <>
                        <span>Hello , {user.username}</span>
                        <a
                          onClick={() => {
                            logOut();
                          }}
                        >
                          logout
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3"></div>
            <nav className="header__menu mobile-menu">
              <ul>
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                {user && (
                  <li>
                    <Link to="/add-product">Add Product</Link>
                  </li>
                )}
                <li>
                  <Link to="/">Pages</Link>
                  <ul className="dropdown">
                    <li>
                      <Link to="/">About Us</Link>
                    </li>
                    <li>
                      <Link to="/">Shop Details</Link>
                    </li>
                    <li>
                      <Link to="/">Shopping Cart</Link>
                    </li>
                    <li>
                      <Link to="/">Check Out</Link>
                    </li>
                    <li>
                      <Link to="/">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/">My Products</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
