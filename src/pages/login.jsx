import React, { useState } from "react";
import { Input } from "../components/common/input";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../api/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

export const Login = () => {
  const [loginData, setLogin] = useState({});
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const onSetLogin = (event) => {
    const { value, name } = event.target;
    setLogin({
      ...loginData,
      [name]: value,
    });
  };


  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const { message, success, email, username, id } = await auth.login(
        loginData
      );
      if (success) {
        dispatch(login({ id, email, username,loggedIn:true }));
        history.push("/");
      } else {
        setError(message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container card-style card-style-width">
      <div className="d-flex justify-content-between mb-5 ">
        <h2>Sign In</h2>
        <div>
          <i
            className="fa fa-facebook-official  fa-2x mx-2"
            aria-hidden="true"
          ></i>
          <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
        </div>
      </div>
      <form className="container px-0 mt-2">
        <Input
          label="Email"
          name="email"
          type="email"
          onSetInput={onSetLogin}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          onSetInput={onSetLogin}
        />

        <button type="submit" onClick={onLogin} className="btn w-100 mt-2 mb-3">
          Login
        </button>
        <p>
          Don't have an account?
          <span>
            {" "}
            <Link to="/signup">Sign Up</Link>
          </span>
        </p>
        {error && <span className="error">{error}</span>}
      </form>
    </div>
  );
};
