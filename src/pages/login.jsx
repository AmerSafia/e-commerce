import React, { useState } from "react";
import { Input } from "../components/common/input";
import { Link } from "react-router-dom";
import { auth } from "../api/auth";

export const Login = () => {
  const [login, setLogin] = useState({});
  const [error, setError] = useState("");

  const onSetLogin = (event) => {
    const { value, name } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await auth.login(login);
      if (!res.success) {
        setError(res.message);
      } else {
        setError("");
        const { email, id } = res;
        localStorage.setItem("logger", JSON.stringify({ email, id }));
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
        <div>
          Not a member? <Link to="/signup"> Sign Up</Link>
        </div>
        {error && <span className="error">{error}</span>}
      </form>
    </div>
  );
};
